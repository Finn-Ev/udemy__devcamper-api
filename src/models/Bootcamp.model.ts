import { prop, getModelForClass, pre, post, modelOptions } from '@typegoose/typegoose';
import slugify from 'slugify';
import geocoder from '../utils/geocoder';

enum CAREER {
  WEB_DEV = 'Web Development',
  MOBILE_DEV = 'Mobile Development',
  UIUX = 'UI/UX',
  DATASCIENCE = 'Data Science',
  BUSINESS = 'Business',
  OTHER = 'Other'
}

@pre<Bootcamp>('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
})
@pre<Bootcamp>('save', async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode
  };

  // Do not save address
  this.address = undefined;
  next();
})
export class Bootcamp {
  @prop({ unique: true, trim: true, required: true, maxlength: [50, 'Name can not be more than 50 characters'] })
  public name!: string;

  @prop()
  slug: string;

  @prop({ required: true, maxlength: [500, 'Description can not be more than 500 characters'] })
  public description!: string;

  @prop({
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  })
  public website: string;

  @prop({ maxlength: [20, 'Phone number can not be longer than 20 characters'] })
  public phone: string;

  @prop({ match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'] })
  public email: string;

  @prop({ required: [true, 'Please add an address'] })
  public address!: string;

  @prop()
  public location: {
    // GeoJSON Point
    type: string;
    coordinates: number[];
    formattedAddress?: string;
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    country?: string;
  };

  @prop({
    required: true,
    enum: CAREER,
    type: String
  })
  public careers: string[];

  @prop({ min: [1, 'Rating must be at least 1'], max: [10, 'Rating must can not be more than 10'] })
  public averageRating: number;

  @prop()
  public averageCost: number;

  @prop({ default: 'no-photo.jpg' })
  public photo: string;

  @prop({ default: false })
  public housing: boolean;

  @prop({ default: false })
  public jobAssistance: boolean;

  @prop({ default: false })
  public jobGuarantee: boolean;

  @prop({ default: false })
  public acceptGi: boolean;

  @prop({ default: Date.now })
  public createdAt: Date;
}

export default getModelForClass(Bootcamp);
