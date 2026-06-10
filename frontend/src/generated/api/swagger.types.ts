/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginDto {
  /**
   * Account email address
   * @example "admin@example.com"
   */
  email: string;
  /**
   * Account password
   * @example "admin123"
   */
  password: string;
}

export interface UserProfileDto {
  /**
   * Unique user identifier
   * @example "1"
   */
  id: string;
  /**
   * User email address
   * @example "admin@example.com"
   */
  email: string;
  /**
   * Display name associated with the account
   * @example "Admin User"
   */
  name: string;
  /**
   * Role assigned to the account. ADMIN can create, update and delete vehicles. USER has read-only access.
   * @example "ADMIN"
   */
  role: 'ADMIN' | 'USER';
}

export interface LoginResponseDto {
  /** Profile of the authenticated user whose access and refresh cookies were issued */
  user: UserProfileDto;
}

export interface PaginatedMetaDto {
  /**
   * Total number of records matching the current query
   * @example 50
   */
  totalItems: number;
  /**
   * Number of records returned in the current page
   * @example 10
   */
  itemCount: number;
  /**
   * Maximum records per page requested by the client
   * @example 10
   */
  itemsPerPage: number;
  /**
   * Total number of pages for the current query and limit
   * @example 5
   */
  totalPages: number;
  /**
   * Current page number (1-indexed)
   * @example 1
   */
  currentPage: number;
  /**
   * Indicates whether another page exists after the current one
   * @example true
   */
  hasNextPage: boolean;
  /**
   * Indicates whether a page exists before the current one
   * @example false
   */
  hasPreviousPage: boolean;
}

export interface PaginatedResponseDto {
  /** Collection of records returned for the current page */
  items: CarSummary[];
  /** Pagination metadata for the current query */
  meta: PaginatedMetaDto;
}

export interface CarBrandSummary {
  /**
   * Resolved brand identifier
   * @example "brand-1"
   */
  id: string;
  /**
   * Resolved brand display name
   * @example "Toyota"
   */
  name: string;
}

export interface CarModelSummary {
  /**
   * Resolved model identifier
   * @example "model-1"
   */
  id: string;
  /**
   * Resolved model display name
   * @example "Corolla"
   */
  name: string;
}

export interface CarSummary {
  /** Vehicle identifier */
  id: string;
  /** Resolved brand information for read operations */
  brand: CarBrandSummary;
  /** Resolved model information for read operations */
  model: CarModelSummary;
  /** Total number of vehicle detail entries */
  total?: number;
  /**
   * Representative vehicle image URL for list and card views
   * @example "/images/car_images/model-1_toyota_corolla.webp"
   */
  imageUrl?: string;
}

export interface CarDetailEntity {
  /**
   * Official registration date of the car (ISO 8601 UTC format)
   * @pattern YYYY-MM-DDTHH:MM:SS.mmmZ
   * @example "2024-10-30T10:01:35.288Z"
   */
  registrationDate: string;
  /**
   * Current mileage of the car in kilometres
   * @min 0
   * @example 15000
   */
  mileage: number;
  /**
   * Currency of the price as an ISO 4217 code. Defaults to EUR when not provided.
   * @default "EUR"
   * @example "EUR"
   */
  currency?:
    | 'EUR'
    | 'GBP'
    | 'CHF'
    | 'SEK'
    | 'NOK'
    | 'DKK'
    | 'PLN'
    | 'CZK'
    | 'HUF'
    | 'RON'
    | 'BGN'
    | 'HRK'
    | 'ARS'
    | 'BRL'
    | 'CLP'
    | 'COP'
    | 'PEN'
    | 'UYU'
    | 'PYG'
    | 'BOB'
    | 'VES'
    | 'USD'
    | 'CAD'
    | 'MXN'
    | 'JPY'
    | 'CNY'
    | 'INR'
    | 'KRW'
    | 'SGD'
    | 'HKD'
    | 'MYR'
    | 'IDR'
    | 'THB'
    | 'VND'
    | 'PKR'
    | 'AUD'
    | 'NZD'
    | 'ZAR'
    | 'EGP'
    | 'NGN'
    | 'KES'
    | 'GHS';
  /**
   * Asking price of the car (must be a positive number)
   * @min 1
   * @example 20000
   */
  price: number;
  /**
   * Year the car was manufactured. Must be an integer between 1900 and the current year (2026).
   * Also must be less than or equal to the year in registrationDate.
   * @min 1900
   * @max 2026
   * @example 2020
   */
  manufactureYear: number;
  /**
   * Whether the car is currently available for sale. Defaults to true when not provided.
   * @default true
   * @example true
   */
  availability?: boolean;
  /**
   * Exterior colour of the car
   * @example "Midnight Blue"
   */
  color?: string;
  /**
   * Free-text description highlighting condition, extras, or any relevant details
   * @example "Excellent condition, single owner, full service history."
   */
  description?: string;
  /**
   * Spanish license plate. Format: 4 digits + optional space + 3 consonants (e.g. 1234 BBB). Must be unique across all cars.
   * @pattern ^[0-9]{4}\s?[BCDFGHJKLMNPRSTVWXYZ]{3}$
   * @example "1234 BBB"
   */
  licensePlate: string;
  /**
   * Vehicle image URL resolved by the backend
   * @example "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
   */
  imageUrl: string;
}

export interface Car {
  /** Vehicle identifier */
  id: string;
  /** Resolved brand information for read operations */
  brand: CarBrandSummary;
  /** Resolved model information for read operations */
  model: CarModelSummary;
  /** Vehicle detail entries */
  carDetails?: CarDetailEntity[];
  /** Total number of vehicle detail entries */
  total?: number;
}

export interface CarDetailsDto {
  /**
   * Official registration date of the car (ISO 8601 UTC format)
   * @pattern YYYY-MM-DDTHH:MM:SS.mmmZ
   * @example "2024-10-30T10:01:35.288Z"
   */
  registrationDate: string;
  /**
   * Current mileage of the car in kilometres
   * @min 0
   * @example 15000
   */
  mileage: number;
  /**
   * Currency of the price as an ISO 4217 code. Defaults to EUR when not provided.
   * @default "EUR"
   * @example "EUR"
   */
  currency?:
    | 'EUR'
    | 'GBP'
    | 'CHF'
    | 'SEK'
    | 'NOK'
    | 'DKK'
    | 'PLN'
    | 'CZK'
    | 'HUF'
    | 'RON'
    | 'BGN'
    | 'HRK'
    | 'ARS'
    | 'BRL'
    | 'CLP'
    | 'COP'
    | 'PEN'
    | 'UYU'
    | 'PYG'
    | 'BOB'
    | 'VES'
    | 'USD'
    | 'CAD'
    | 'MXN'
    | 'JPY'
    | 'CNY'
    | 'INR'
    | 'KRW'
    | 'SGD'
    | 'HKD'
    | 'MYR'
    | 'IDR'
    | 'THB'
    | 'VND'
    | 'PKR'
    | 'AUD'
    | 'NZD'
    | 'ZAR'
    | 'EGP'
    | 'NGN'
    | 'KES'
    | 'GHS';
  /**
   * Asking price of the car (must be a positive number)
   * @min 1
   * @example 20000
   */
  price: number;
  /**
   * Year the car was manufactured. Must be an integer between 1900 and the current year (2026).
   * Also must be less than or equal to the year in registrationDate.
   * @min 1900
   * @max 2026
   * @example 2020
   */
  manufactureYear: number;
  /**
   * Whether the car is currently available for sale. Defaults to true when not provided.
   * @default true
   * @example true
   */
  availability?: boolean;
  /**
   * Exterior colour of the car
   * @example "Midnight Blue"
   */
  color?: string;
  /**
   * Free-text description highlighting condition, extras, or any relevant details
   * @example "Excellent condition, single owner, full service history."
   */
  description?: string;
  /**
   * Spanish license plate. Format: 4 digits + optional space + 3 consonants (e.g. 1234 BBB). Must be unique across all cars.
   * @pattern ^[0-9]{4}\s?[BCDFGHJKLMNPRSTVWXYZ]{3}$
   * @example "1234 BBB"
   */
  licensePlate: string;
}

export interface CreateCarDto {
  /**
   * ID of the car brand. Must reference an existing brand (e.g. brand-1, brand-2).
   * @example "brand-1"
   */
  brandId: string;
  /**
   * ID of the car model. Must reference a model that belongs to the selected brand.
   * @example "model-1"
   */
  modelId: string;
  /**
   * List of car detail entries (one per listing or unit). Can be omitted to create a car without details.
   * @example [{"registrationDate":"2024-10-30T10:01:35.288Z","mileage":15000,"price":20000,"manufactureYear":2020,"currency":"EUR","availability":true,"color":"Midnight Blue","description":"Excellent condition, single owner.","licensePlate":"1234 BBB"}]
   */
  carDetails?: CarDetailsDto[];
}

export interface UploadedCarDocumentResponseDto {
  /**
   * Generated identifier for the uploaded document metadata
   * @example "a3f7d1e3-5c7e-4a50-8b84-df73b46e5d4f"
   */
  id: string;
  /**
   * Vehicle identifier the upload was associated with
   * @example "9f65ec7a-ef2c-4d8a-a7dc-248018fca712"
   */
  carId: string;
  /**
   * Original filename received in the multipart upload
   * @example "itv.pdf"
   */
  originalName: string;
  /**
   * MIME type reported for the uploaded file
   * @example "application/pdf"
   */
  mimeType: string;
  /**
   * File size in bytes
   * @example 184532
   */
  size: number;
  /**
   * Functional category assigned to the document
   * @example "inspection"
   */
  documentType: 'invoice' | 'inspection' | 'insurance' | 'registration' | 'other';
  /**
   * Optional display title for the document
   * @example "Ficha tecnica ITV"
   */
  title?: string;
  /**
   * Optional notes attached to the document
   * @example "Documento de prueba para practicar subida con FormData"
   */
  description?: string;
  /**
   * Timestamp when the upload was received
   * @example "2026-03-27T10:15:00.000Z"
   */
  uploadedAt: string;
  /**
   * Indicates whether the backend persisted the binary content
   * @example true
   */
  persisted: boolean;
  /**
   * Download URL for the single document associated with the car
   * @example "/cars/9f65ec7a-ef2c-4d8a-a7dc-248018fca712/document/download"
   */
  downloadUrl: string;
  /**
   * Explains how the backend handled the uploaded file
   * @example "The file was stored on disk and replaced any previous document linked to the vehicle."
   */
  message: string;
}

export interface Brand {
  /**
   * Brand identifier
   * @example "brand-1"
   */
  id: string;
  /**
   * Display name of the brand
   * @example "Toyota"
   */
  name: string;
}

export interface Model {
  /**
   * Model identifier
   * @example "model-1"
   */
  id: string;
  /**
   * Display name of the model
   * @example "Corolla"
   */
  name: string;
  /**
   * Identifier of the brand this model belongs to
   * @example "brand-1"
   */
  brandId: string;
}
