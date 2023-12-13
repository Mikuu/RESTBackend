import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop()
    bid: string;

    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    publishedAt: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
