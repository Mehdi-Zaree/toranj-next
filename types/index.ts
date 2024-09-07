import {branches, categories, comments, services, sessions} from "../db/schema";
import {products} from "../db/schema";
import {InferSelectModel} from 'drizzle-orm'


    export type category = InferSelectModel<typeof categories>
    export type product = InferSelectModel<typeof products>
    export type services = InferSelectModel<typeof services>
    export type comments = InferSelectModel<typeof comments>
    export type branches = InferSelectModel<typeof branches>

