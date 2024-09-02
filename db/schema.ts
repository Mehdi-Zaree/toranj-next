import {
    boolean,
    integer,
    numeric,
    pgTable,
    serial,
    smallint,
    text,
    timestamp,
    uuid,
    varchar
} from "drizzle-orm/pg-core";
import {AdapterAccountType} from "next-auth/adapters";
import {primaryKey} from "drizzle-orm/pg-core/primary-keys";
// users
export const users = pgTable("user", {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    name: text("name"),
    email: text("email").unique(),
    role: text('role').notNull().default('user'),
    password: text("password"),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
})

export const accounts = pgTable(
    "account",
    {
        userId: uuid("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
)

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: uuid("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken:any) => ({
        compositePk: primaryKey({
            columns: [verificationToken.identifier, verificationToken.token],
        }),
    })
)

export const categories = pgTable('categories', {
    category_id: smallint('category_id').primaryKey(),
    categoryName: varchar('category_name', { length: 255 }).notNull(),
    description: text('description'),
    categoryImage: varchar('category_image', { length: 255 }),
});



export const products = pgTable('products', {
    productId: smallint('product_id').primaryKey(),  // Primary Key
    productName: varchar('product_name', { length: 255 }).notNull(),  // Name of the product
    description: text('description'),  // Description of the product
    productImage: varchar('product_image', { length: 255 }),  // URL or path to the product image
    price: integer('price',).notNull(),  // Price of the product
    timeOfPreparation: integer('time_of_preparation').notNull(),  // Time of preparation in minutes
    slug: varchar('slug', { length: 255 }).notNull(),  // URL-friendly name for the product
    averageRating: numeric('average_rating', { precision: 2}).default('0'),  // Average rating (e.g., 4.5)
    discount: boolean('discount').default(false),  // Discount boolean column, default is false
    discountAmount: smallint('discount_amount',).default(0),
    categoryId: integer('category_id')
        .references(() => categories.category_id)
        .notNull(),  // Foreign Key referencing categories
});
export const comments = pgTable('comments',{
    comment_id: smallint('comment_id').primaryKey().notNull(),
    userName : varchar('user_name', { length: 255 }).notNull(),
    userNameId: integer('user_name_id').notNull(),
    comment : text('comment').notNull(),
    userImage: text('user_image', ).notNull(),
})
export const branches = pgTable('branches', {
    branch_id: smallint('branch_id').primaryKey(),
    branchName: varchar('branch_name', { length: 255 }).notNull(),
    branchImage: text('branch_image').notNull(),
    branchAddress : varchar('branchAddress', { length: 255 }).notNull(),
    branchNumber : varchar('branchNumber').notNull(),
})
export const socials = pgTable('socials', {
    social_id: smallint('social_id').primaryKey().notNull(),
    socialName: varchar('social_name', { length: 255 }).notNull(),
    socialIcon : varchar('socialIcon', { length: 255 }).notNull(),
    socialLink: varchar('socialLink', { length: 255 }).notNull(),
})
export const services  = pgTable('services', {
    service_id: smallint('service_id').primaryKey(),
    serviceHeading : varchar('serviceHeading', { length: 255 }).notNull(),
    serviceDescription : varchar('serviceDescription', { length: 255 }).notNull(),
    serviceImage : varchar('serviceImage', { length: 255 }).notNull(),
})

