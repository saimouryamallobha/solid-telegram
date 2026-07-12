
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model MaintenanceLog
 * 
 */
export type MaintenanceLog = $Result.DefaultSelection<Prisma.$MaintenanceLogPayload>
/**
 * Model FuelExpense
 * 
 */
export type FuelExpense = $Result.DefaultSelection<Prisma.$FuelExpensePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Fine
 * 
 */
export type Fine = $Result.DefaultSelection<Prisma.$FinePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs>;

  /**
   * `prisma.maintenanceLog`: Exposes CRUD operations for the **MaintenanceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceLogs
    * const maintenanceLogs = await prisma.maintenanceLog.findMany()
    * ```
    */
  get maintenanceLog(): Prisma.MaintenanceLogDelegate<ExtArgs>;

  /**
   * `prisma.fuelExpense`: Exposes CRUD operations for the **FuelExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuelExpenses
    * const fuelExpenses = await prisma.fuelExpense.findMany()
    * ```
    */
  get fuelExpense(): Prisma.FuelExpenseDelegate<ExtArgs>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.fine`: Exposes CRUD operations for the **Fine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fine.findMany()
    * ```
    */
  get fine(): Prisma.FineDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Driver: 'Driver',
    Trip: 'Trip',
    MaintenanceLog: 'MaintenanceLog',
    FuelExpense: 'FuelExpense',
    Document: 'Document',
    Attendance: 'Attendance',
    Fine: 'Fine'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "vehicle" | "driver" | "trip" | "maintenanceLog" | "fuelExpense" | "document" | "attendance" | "fine"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceLog: {
        payload: Prisma.$MaintenanceLogPayload<ExtArgs>
        fields: Prisma.MaintenanceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findMany: {
            args: Prisma.MaintenanceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          create: {
            args: Prisma.MaintenanceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          createMany: {
            args: Prisma.MaintenanceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          update: {
            args: Prisma.MaintenanceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceLog>
          }
          groupBy: {
            args: Prisma.MaintenanceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceLogCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogCountAggregateOutputType> | number
          }
        }
      }
      FuelExpense: {
        payload: Prisma.$FuelExpensePayload<ExtArgs>
        fields: Prisma.FuelExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuelExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuelExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>
          }
          findFirst: {
            args: Prisma.FuelExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuelExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>
          }
          findMany: {
            args: Prisma.FuelExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>[]
          }
          create: {
            args: Prisma.FuelExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>
          }
          createMany: {
            args: Prisma.FuelExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuelExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>[]
          }
          delete: {
            args: Prisma.FuelExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>
          }
          update: {
            args: Prisma.FuelExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>
          }
          deleteMany: {
            args: Prisma.FuelExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuelExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuelExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelExpensePayload>
          }
          aggregate: {
            args: Prisma.FuelExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuelExpense>
          }
          groupBy: {
            args: Prisma.FuelExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuelExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuelExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<FuelExpenseCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Fine: {
        payload: Prisma.$FinePayload<ExtArgs>
        fields: Prisma.FineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findFirst: {
            args: Prisma.FineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findMany: {
            args: Prisma.FineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          create: {
            args: Prisma.FineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          createMany: {
            args: Prisma.FineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          delete: {
            args: Prisma.FineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          update: {
            args: Prisma.FineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          deleteMany: {
            args: Prisma.FineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          aggregate: {
            args: Prisma.FineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFine>
          }
          groupBy: {
            args: Prisma.FineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineGroupByOutputType>[]
          }
          count: {
            args: Prisma.FineCountArgs<ExtArgs>
            result: $Utils.Optional<FineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    trips: number
    maintenanceLogs: number
    fuelExpenses: number
    documents: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | VehicleCountOutputTypeCountTripsArgs
    maintenanceLogs?: boolean | VehicleCountOutputTypeCountMaintenanceLogsArgs
    fuelExpenses?: boolean | VehicleCountOutputTypeCountFuelExpensesArgs
    documents?: boolean | VehicleCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountFuelExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelExpenseWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    trips: number
    documents: number
    attendances: number
    fines: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | DriverCountOutputTypeCountTripsArgs
    documents?: boolean | DriverCountOutputTypeCountDocumentsArgs
    attendances?: boolean | DriverCountOutputTypeCountAttendancesArgs
    fines?: boolean | DriverCountOutputTypeCountFinesArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountFinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    fuelExpenses: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fuelExpenses?: boolean | TripCountOutputTypeCountFuelExpensesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountFuelExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    maxLoadCapacity: number | null
    odometer: number | null
    acquisitionCost: number | null
  }

  export type VehicleSumAggregateOutputType = {
    maxLoadCapacity: number | null
    odometer: number | null
    acquisitionCost: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    regNumber: string | null
    name: string | null
    model: string | null
    type: string | null
    maxLoadCapacity: number | null
    odometer: number | null
    acquisitionCost: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    regNumber: string | null
    name: string | null
    model: string | null
    type: string | null
    maxLoadCapacity: number | null
    odometer: number | null
    acquisitionCost: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    regNumber: number
    name: number
    model: number
    type: number
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    maxLoadCapacity?: true
    odometer?: true
    acquisitionCost?: true
  }

  export type VehicleSumAggregateInputType = {
    maxLoadCapacity?: true
    odometer?: true
    acquisitionCost?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    regNumber?: true
    name?: true
    model?: true
    type?: true
    maxLoadCapacity?: true
    odometer?: true
    acquisitionCost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    regNumber?: true
    name?: true
    model?: true
    type?: true
    maxLoadCapacity?: true
    odometer?: true
    acquisitionCost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    regNumber?: true
    name?: true
    model?: true
    type?: true
    maxLoadCapacity?: true
    odometer?: true
    acquisitionCost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regNumber?: boolean
    name?: boolean
    model?: boolean
    type?: boolean
    maxLoadCapacity?: boolean
    odometer?: boolean
    acquisitionCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    maintenanceLogs?: boolean | Vehicle$maintenanceLogsArgs<ExtArgs>
    fuelExpenses?: boolean | Vehicle$fuelExpensesArgs<ExtArgs>
    documents?: boolean | Vehicle$documentsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regNumber?: boolean
    name?: boolean
    model?: boolean
    type?: boolean
    maxLoadCapacity?: boolean
    odometer?: boolean
    acquisitionCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    regNumber?: boolean
    name?: boolean
    model?: boolean
    type?: boolean
    maxLoadCapacity?: boolean
    odometer?: boolean
    acquisitionCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    maintenanceLogs?: boolean | Vehicle$maintenanceLogsArgs<ExtArgs>
    fuelExpenses?: boolean | Vehicle$fuelExpensesArgs<ExtArgs>
    documents?: boolean | Vehicle$documentsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      maintenanceLogs: Prisma.$MaintenanceLogPayload<ExtArgs>[]
      fuelExpenses: Prisma.$FuelExpensePayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      regNumber: string
      name: string
      model: string
      type: string
      maxLoadCapacity: number
      odometer: number
      acquisitionCost: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends Vehicle$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany"> | Null>
    maintenanceLogs<T extends Vehicle$maintenanceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany"> | Null>
    fuelExpenses<T extends Vehicle$fuelExpensesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$fuelExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findMany"> | Null>
    documents<T extends Vehicle$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly regNumber: FieldRef<"Vehicle", 'String'>
    readonly name: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly type: FieldRef<"Vehicle", 'String'>
    readonly maxLoadCapacity: FieldRef<"Vehicle", 'Float'>
    readonly odometer: FieldRef<"Vehicle", 'Float'>
    readonly acquisitionCost: FieldRef<"Vehicle", 'Float'>
    readonly status: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle.trips
   */
  export type Vehicle$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Vehicle.maintenanceLogs
   */
  export type Vehicle$maintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    cursor?: MaintenanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * Vehicle.fuelExpenses
   */
  export type Vehicle$fuelExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    where?: FuelExpenseWhereInput
    orderBy?: FuelExpenseOrderByWithRelationInput | FuelExpenseOrderByWithRelationInput[]
    cursor?: FuelExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelExpenseScalarFieldEnum | FuelExpenseScalarFieldEnum[]
  }

  /**
   * Vehicle.documents
   */
  export type Vehicle$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    safetyScore: number | null
    salary: number | null
    rating: number | null
  }

  export type DriverSumAggregateOutputType = {
    safetyScore: number | null
    salary: number | null
    rating: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    name: string | null
    licenseNumber: string | null
    licenseCategory: string | null
    licenseExpiryDate: Date | null
    contactNumber: string | null
    safetyScore: number | null
    status: string | null
    salary: number | null
    joinDate: Date | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    name: string | null
    licenseNumber: string | null
    licenseCategory: string | null
    licenseExpiryDate: Date | null
    contactNumber: string | null
    safetyScore: number | null
    status: string | null
    salary: number | null
    joinDate: Date | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    licenseNumber: number
    licenseCategory: number
    licenseExpiryDate: number
    contactNumber: number
    safetyScore: number
    status: number
    salary: number
    joinDate: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    safetyScore?: true
    salary?: true
    rating?: true
  }

  export type DriverSumAggregateInputType = {
    safetyScore?: true
    salary?: true
    rating?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    licenseNumber?: true
    licenseCategory?: true
    licenseExpiryDate?: true
    contactNumber?: true
    safetyScore?: true
    status?: true
    salary?: true
    joinDate?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    licenseNumber?: true
    licenseCategory?: true
    licenseExpiryDate?: true
    contactNumber?: true
    safetyScore?: true
    status?: true
    salary?: true
    joinDate?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    licenseNumber?: true
    licenseCategory?: true
    licenseExpiryDate?: true
    contactNumber?: true
    safetyScore?: true
    status?: true
    salary?: true
    joinDate?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date
    contactNumber: string
    safetyScore: number
    status: string
    salary: number
    joinDate: Date
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    salary?: boolean
    joinDate?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | Driver$tripsArgs<ExtArgs>
    documents?: boolean | Driver$documentsArgs<ExtArgs>
    attendances?: boolean | Driver$attendancesArgs<ExtArgs>
    fines?: boolean | Driver$finesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    salary?: boolean
    joinDate?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    salary?: boolean
    joinDate?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | Driver$tripsArgs<ExtArgs>
    documents?: boolean | Driver$documentsArgs<ExtArgs>
    attendances?: boolean | Driver$attendancesArgs<ExtArgs>
    fines?: boolean | Driver$finesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      fines: Prisma.$FinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      licenseNumber: string
      licenseCategory: string
      licenseExpiryDate: Date
      contactNumber: string
      safetyScore: number
      status: string
      salary: number
      joinDate: Date
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends Driver$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany"> | Null>
    documents<T extends Driver$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany"> | Null>
    attendances<T extends Driver$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    fines<T extends Driver$finesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$finesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */ 
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly licenseNumber: FieldRef<"Driver", 'String'>
    readonly licenseCategory: FieldRef<"Driver", 'String'>
    readonly licenseExpiryDate: FieldRef<"Driver", 'DateTime'>
    readonly contactNumber: FieldRef<"Driver", 'String'>
    readonly safetyScore: FieldRef<"Driver", 'Float'>
    readonly status: FieldRef<"Driver", 'String'>
    readonly salary: FieldRef<"Driver", 'Float'>
    readonly joinDate: FieldRef<"Driver", 'DateTime'>
    readonly rating: FieldRef<"Driver", 'Float'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
  }

  /**
   * Driver.trips
   */
  export type Driver$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Driver.documents
   */
  export type Driver$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Driver.attendances
   */
  export type Driver$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Driver.fines
   */
  export type Driver$finesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    where?: FineWhereInput
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    cursor?: FineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    cargoWeight: number | null
    distance: number | null
    fuelConsumed: number | null
    startOdometer: number | null
    endOdometer: number | null
  }

  export type TripSumAggregateOutputType = {
    cargoWeight: number | null
    distance: number | null
    fuelConsumed: number | null
    startOdometer: number | null
    endOdometer: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    source: string | null
    destination: string | null
    cargoWeight: number | null
    distance: number | null
    status: string | null
    vehicleId: string | null
    driverId: string | null
    startTime: Date | null
    endTime: Date | null
    fuelConsumed: number | null
    startOdometer: number | null
    endOdometer: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    source: string | null
    destination: string | null
    cargoWeight: number | null
    distance: number | null
    status: string | null
    vehicleId: string | null
    driverId: string | null
    startTime: Date | null
    endTime: Date | null
    fuelConsumed: number | null
    startOdometer: number | null
    endOdometer: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    source: number
    destination: number
    cargoWeight: number
    distance: number
    status: number
    vehicleId: number
    driverId: number
    startTime: number
    endTime: number
    fuelConsumed: number
    startOdometer: number
    endOdometer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    cargoWeight?: true
    distance?: true
    fuelConsumed?: true
    startOdometer?: true
    endOdometer?: true
  }

  export type TripSumAggregateInputType = {
    cargoWeight?: true
    distance?: true
    fuelConsumed?: true
    startOdometer?: true
    endOdometer?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    source?: true
    destination?: true
    cargoWeight?: true
    distance?: true
    status?: true
    vehicleId?: true
    driverId?: true
    startTime?: true
    endTime?: true
    fuelConsumed?: true
    startOdometer?: true
    endOdometer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    source?: true
    destination?: true
    cargoWeight?: true
    distance?: true
    status?: true
    vehicleId?: true
    driverId?: true
    startTime?: true
    endTime?: true
    fuelConsumed?: true
    startOdometer?: true
    endOdometer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    source?: true
    destination?: true
    cargoWeight?: true
    distance?: true
    status?: true
    vehicleId?: true
    driverId?: true
    startTime?: true
    endTime?: true
    fuelConsumed?: true
    startOdometer?: true
    endOdometer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status: string
    vehicleId: string
    driverId: string
    startTime: Date | null
    endTime: Date | null
    fuelConsumed: number | null
    startOdometer: number | null
    endOdometer: number | null
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    destination?: boolean
    cargoWeight?: boolean
    distance?: boolean
    status?: boolean
    vehicleId?: boolean
    driverId?: boolean
    startTime?: boolean
    endTime?: boolean
    fuelConsumed?: boolean
    startOdometer?: boolean
    endOdometer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    fuelExpenses?: boolean | Trip$fuelExpensesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    destination?: boolean
    cargoWeight?: boolean
    distance?: boolean
    status?: boolean
    vehicleId?: boolean
    driverId?: boolean
    startTime?: boolean
    endTime?: boolean
    fuelConsumed?: boolean
    startOdometer?: boolean
    endOdometer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    source?: boolean
    destination?: boolean
    cargoWeight?: boolean
    distance?: boolean
    status?: boolean
    vehicleId?: boolean
    driverId?: boolean
    startTime?: boolean
    endTime?: boolean
    fuelConsumed?: boolean
    startOdometer?: boolean
    endOdometer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    fuelExpenses?: boolean | Trip$fuelExpensesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
      fuelExpenses: Prisma.$FuelExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      destination: string
      cargoWeight: number
      distance: number
      status: string
      vehicleId: string
      driverId: string
      startTime: Date | null
      endTime: Date | null
      fuelConsumed: number | null
      startOdometer: number | null
      endOdometer: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fuelExpenses<T extends Trip$fuelExpensesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$fuelExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */ 
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly source: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly cargoWeight: FieldRef<"Trip", 'Float'>
    readonly distance: FieldRef<"Trip", 'Float'>
    readonly status: FieldRef<"Trip", 'String'>
    readonly vehicleId: FieldRef<"Trip", 'String'>
    readonly driverId: FieldRef<"Trip", 'String'>
    readonly startTime: FieldRef<"Trip", 'DateTime'>
    readonly endTime: FieldRef<"Trip", 'DateTime'>
    readonly fuelConsumed: FieldRef<"Trip", 'Float'>
    readonly startOdometer: FieldRef<"Trip", 'Float'>
    readonly endOdometer: FieldRef<"Trip", 'Float'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
  }

  /**
   * Trip.fuelExpenses
   */
  export type Trip$fuelExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    where?: FuelExpenseWhereInput
    orderBy?: FuelExpenseOrderByWithRelationInput | FuelExpenseOrderByWithRelationInput[]
    cursor?: FuelExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelExpenseScalarFieldEnum | FuelExpenseScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceLog
   */

  export type AggregateMaintenanceLog = {
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  export type MaintenanceLogAvgAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceLogSumAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceLogMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: string | null
    cost: number | null
    date: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceLogMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: string | null
    cost: number | null
    date: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceLogCountAggregateOutputType = {
    id: number
    vehicleId: number
    type: number
    cost: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceLogAvgAggregateInputType = {
    cost?: true
  }

  export type MaintenanceLogSumAggregateInputType = {
    cost?: true
  }

  export type MaintenanceLogMinAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    cost?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceLogMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    cost?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceLogCountAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    cost?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLog to aggregate.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceLogs
    **/
    _count?: true | MaintenanceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type GetMaintenanceLogAggregateType<T extends MaintenanceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceLog[P]>
      : GetScalarType<T[P], AggregateMaintenanceLog[P]>
  }




  export type MaintenanceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithAggregationInput | MaintenanceLogOrderByWithAggregationInput[]
    by: MaintenanceLogScalarFieldEnum[] | MaintenanceLogScalarFieldEnum
    having?: MaintenanceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceLogCountAggregateInputType | true
    _avg?: MaintenanceLogAvgAggregateInputType
    _sum?: MaintenanceLogSumAggregateInputType
    _min?: MaintenanceLogMinAggregateInputType
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type MaintenanceLogGroupByOutputType = {
    id: string
    vehicleId: string
    type: string
    cost: number
    date: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  type GetMaintenanceLogGroupByPayload<T extends MaintenanceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    cost?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>

  export type MaintenanceLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    cost?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>

  export type MaintenanceLogSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    cost?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type MaintenanceLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceLog"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      type: string
      cost: number
      date: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceLog"]>
    composites: {}
  }

  type MaintenanceLogGetPayload<S extends boolean | null | undefined | MaintenanceLogDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceLogPayload, S>

  type MaintenanceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaintenanceLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaintenanceLogCountAggregateInputType | true
    }

  export interface MaintenanceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceLog'], meta: { name: 'MaintenanceLog' } }
    /**
     * Find zero or one MaintenanceLog that matches the filter.
     * @param {MaintenanceLogFindUniqueArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceLogFindUniqueArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MaintenanceLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaintenanceLogFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MaintenanceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceLogFindFirstArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MaintenanceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MaintenanceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany()
     * 
     * // Get first 10 MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceLogWithIdOnly = await prisma.maintenanceLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceLogFindManyArgs>(args?: SelectSubset<T, MaintenanceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MaintenanceLog.
     * @param {MaintenanceLogCreateArgs} args - Arguments to create a MaintenanceLog.
     * @example
     * // Create one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.create({
     *   data: {
     *     // ... data to create a MaintenanceLog
     *   }
     * })
     * 
     */
    create<T extends MaintenanceLogCreateArgs>(args: SelectSubset<T, MaintenanceLogCreateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MaintenanceLogs.
     * @param {MaintenanceLogCreateManyArgs} args - Arguments to create many MaintenanceLogs.
     * @example
     * // Create many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceLogCreateManyArgs>(args?: SelectSubset<T, MaintenanceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceLogs and returns the data saved in the database.
     * @param {MaintenanceLogCreateManyAndReturnArgs} args - Arguments to create many MaintenanceLogs.
     * @example
     * // Create many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceLogs and only return the `id`
     * const maintenanceLogWithIdOnly = await prisma.maintenanceLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MaintenanceLog.
     * @param {MaintenanceLogDeleteArgs} args - Arguments to delete one MaintenanceLog.
     * @example
     * // Delete one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceLog
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceLogDeleteArgs>(args: SelectSubset<T, MaintenanceLogDeleteArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MaintenanceLog.
     * @param {MaintenanceLogUpdateArgs} args - Arguments to update one MaintenanceLog.
     * @example
     * // Update one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceLogUpdateArgs>(args: SelectSubset<T, MaintenanceLogUpdateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MaintenanceLogs.
     * @param {MaintenanceLogDeleteManyArgs} args - Arguments to filter MaintenanceLogs to delete.
     * @example
     * // Delete a few MaintenanceLogs
     * const { count } = await prisma.maintenanceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceLogDeleteManyArgs>(args?: SelectSubset<T, MaintenanceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceLogUpdateManyArgs>(args: SelectSubset<T, MaintenanceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceLog.
     * @param {MaintenanceLogUpsertArgs} args - Arguments to update or create a MaintenanceLog.
     * @example
     * // Update or create a MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.upsert({
     *   create: {
     *     // ... data to create a MaintenanceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceLog we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceLogUpsertArgs>(args: SelectSubset<T, MaintenanceLogUpsertArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogCountArgs} args - Arguments to filter MaintenanceLogs to count.
     * @example
     * // Count the number of MaintenanceLogs
     * const count = await prisma.maintenanceLog.count({
     *   where: {
     *     // ... the filter for the MaintenanceLogs we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceLogCountArgs>(
      args?: Subset<T, MaintenanceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceLogAggregateArgs>(args: Subset<T, MaintenanceLogAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceLogAggregateType<T>>

    /**
     * Group by MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceLogGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceLog model
   */
  readonly fields: MaintenanceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceLog model
   */ 
  interface MaintenanceLogFieldRefs {
    readonly id: FieldRef<"MaintenanceLog", 'String'>
    readonly vehicleId: FieldRef<"MaintenanceLog", 'String'>
    readonly type: FieldRef<"MaintenanceLog", 'String'>
    readonly cost: FieldRef<"MaintenanceLog", 'Float'>
    readonly date: FieldRef<"MaintenanceLog", 'DateTime'>
    readonly status: FieldRef<"MaintenanceLog", 'String'>
    readonly createdAt: FieldRef<"MaintenanceLog", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceLog findUnique
   */
  export type MaintenanceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findUniqueOrThrow
   */
  export type MaintenanceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findFirst
   */
  export type MaintenanceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findFirstOrThrow
   */
  export type MaintenanceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findMany
   */
  export type MaintenanceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLogs to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog create
   */
  export type MaintenanceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceLog.
     */
    data: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
  }

  /**
   * MaintenanceLog createMany
   */
  export type MaintenanceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceLogs.
     */
    data: MaintenanceLogCreateManyInput | MaintenanceLogCreateManyInput[]
  }

  /**
   * MaintenanceLog createManyAndReturn
   */
  export type MaintenanceLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MaintenanceLogs.
     */
    data: MaintenanceLogCreateManyInput | MaintenanceLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceLog update
   */
  export type MaintenanceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceLog.
     */
    data: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceLog to update.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog updateMany
   */
  export type MaintenanceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceLogs.
     */
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceLogs to update
     */
    where?: MaintenanceLogWhereInput
  }

  /**
   * MaintenanceLog upsert
   */
  export type MaintenanceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceLog to update in case it exists.
     */
    where: MaintenanceLogWhereUniqueInput
    /**
     * In case the MaintenanceLog found by the `where` argument doesn't exist, create a new MaintenanceLog with this data.
     */
    create: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
    /**
     * In case the MaintenanceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
  }

  /**
   * MaintenanceLog delete
   */
  export type MaintenanceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceLog to delete.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog deleteMany
   */
  export type MaintenanceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLogs to delete
     */
    where?: MaintenanceLogWhereInput
  }

  /**
   * MaintenanceLog without action
   */
  export type MaintenanceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
  }


  /**
   * Model FuelExpense
   */

  export type AggregateFuelExpense = {
    _count: FuelExpenseCountAggregateOutputType | null
    _avg: FuelExpenseAvgAggregateOutputType | null
    _sum: FuelExpenseSumAggregateOutputType | null
    _min: FuelExpenseMinAggregateOutputType | null
    _max: FuelExpenseMaxAggregateOutputType | null
  }

  export type FuelExpenseAvgAggregateOutputType = {
    liters: number | null
    cost: number | null
  }

  export type FuelExpenseSumAggregateOutputType = {
    liters: number | null
    cost: number | null
  }

  export type FuelExpenseMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    tripId: string | null
    liters: number | null
    cost: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelExpenseMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    tripId: string | null
    liters: number | null
    cost: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelExpenseCountAggregateOutputType = {
    id: number
    vehicleId: number
    tripId: number
    liters: number
    cost: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuelExpenseAvgAggregateInputType = {
    liters?: true
    cost?: true
  }

  export type FuelExpenseSumAggregateInputType = {
    liters?: true
    cost?: true
  }

  export type FuelExpenseMinAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    liters?: true
    cost?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelExpenseMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    liters?: true
    cost?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelExpenseCountAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    liters?: true
    cost?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuelExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelExpense to aggregate.
     */
    where?: FuelExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelExpenses to fetch.
     */
    orderBy?: FuelExpenseOrderByWithRelationInput | FuelExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuelExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FuelExpenses
    **/
    _count?: true | FuelExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelExpenseMaxAggregateInputType
  }

  export type GetFuelExpenseAggregateType<T extends FuelExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateFuelExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuelExpense[P]>
      : GetScalarType<T[P], AggregateFuelExpense[P]>
  }




  export type FuelExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelExpenseWhereInput
    orderBy?: FuelExpenseOrderByWithAggregationInput | FuelExpenseOrderByWithAggregationInput[]
    by: FuelExpenseScalarFieldEnum[] | FuelExpenseScalarFieldEnum
    having?: FuelExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelExpenseCountAggregateInputType | true
    _avg?: FuelExpenseAvgAggregateInputType
    _sum?: FuelExpenseSumAggregateInputType
    _min?: FuelExpenseMinAggregateInputType
    _max?: FuelExpenseMaxAggregateInputType
  }

  export type FuelExpenseGroupByOutputType = {
    id: string
    vehicleId: string
    tripId: string | null
    liters: number
    cost: number
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: FuelExpenseCountAggregateOutputType | null
    _avg: FuelExpenseAvgAggregateOutputType | null
    _sum: FuelExpenseSumAggregateOutputType | null
    _min: FuelExpenseMinAggregateOutputType | null
    _max: FuelExpenseMaxAggregateOutputType | null
  }

  type GetFuelExpenseGroupByPayload<T extends FuelExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], FuelExpenseGroupByOutputType[P]>
        }
      >
    >


  export type FuelExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelExpense$tripArgs<ExtArgs>
  }, ExtArgs["result"]["fuelExpense"]>

  export type FuelExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelExpense$tripArgs<ExtArgs>
  }, ExtArgs["result"]["fuelExpense"]>

  export type FuelExpenseSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuelExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelExpense$tripArgs<ExtArgs>
  }
  export type FuelExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelExpense$tripArgs<ExtArgs>
  }

  export type $FuelExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FuelExpense"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      tripId: string | null
      liters: number
      cost: number
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fuelExpense"]>
    composites: {}
  }

  type FuelExpenseGetPayload<S extends boolean | null | undefined | FuelExpenseDefaultArgs> = $Result.GetResult<Prisma.$FuelExpensePayload, S>

  type FuelExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FuelExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FuelExpenseCountAggregateInputType | true
    }

  export interface FuelExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FuelExpense'], meta: { name: 'FuelExpense' } }
    /**
     * Find zero or one FuelExpense that matches the filter.
     * @param {FuelExpenseFindUniqueArgs} args - Arguments to find a FuelExpense
     * @example
     * // Get one FuelExpense
     * const fuelExpense = await prisma.fuelExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuelExpenseFindUniqueArgs>(args: SelectSubset<T, FuelExpenseFindUniqueArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FuelExpense that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FuelExpenseFindUniqueOrThrowArgs} args - Arguments to find a FuelExpense
     * @example
     * // Get one FuelExpense
     * const fuelExpense = await prisma.fuelExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuelExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, FuelExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FuelExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseFindFirstArgs} args - Arguments to find a FuelExpense
     * @example
     * // Get one FuelExpense
     * const fuelExpense = await prisma.fuelExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuelExpenseFindFirstArgs>(args?: SelectSubset<T, FuelExpenseFindFirstArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FuelExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseFindFirstOrThrowArgs} args - Arguments to find a FuelExpense
     * @example
     * // Get one FuelExpense
     * const fuelExpense = await prisma.fuelExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuelExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, FuelExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FuelExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuelExpenses
     * const fuelExpenses = await prisma.fuelExpense.findMany()
     * 
     * // Get first 10 FuelExpenses
     * const fuelExpenses = await prisma.fuelExpense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuelExpenseWithIdOnly = await prisma.fuelExpense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuelExpenseFindManyArgs>(args?: SelectSubset<T, FuelExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FuelExpense.
     * @param {FuelExpenseCreateArgs} args - Arguments to create a FuelExpense.
     * @example
     * // Create one FuelExpense
     * const FuelExpense = await prisma.fuelExpense.create({
     *   data: {
     *     // ... data to create a FuelExpense
     *   }
     * })
     * 
     */
    create<T extends FuelExpenseCreateArgs>(args: SelectSubset<T, FuelExpenseCreateArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FuelExpenses.
     * @param {FuelExpenseCreateManyArgs} args - Arguments to create many FuelExpenses.
     * @example
     * // Create many FuelExpenses
     * const fuelExpense = await prisma.fuelExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuelExpenseCreateManyArgs>(args?: SelectSubset<T, FuelExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FuelExpenses and returns the data saved in the database.
     * @param {FuelExpenseCreateManyAndReturnArgs} args - Arguments to create many FuelExpenses.
     * @example
     * // Create many FuelExpenses
     * const fuelExpense = await prisma.fuelExpense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FuelExpenses and only return the `id`
     * const fuelExpenseWithIdOnly = await prisma.fuelExpense.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuelExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, FuelExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FuelExpense.
     * @param {FuelExpenseDeleteArgs} args - Arguments to delete one FuelExpense.
     * @example
     * // Delete one FuelExpense
     * const FuelExpense = await prisma.fuelExpense.delete({
     *   where: {
     *     // ... filter to delete one FuelExpense
     *   }
     * })
     * 
     */
    delete<T extends FuelExpenseDeleteArgs>(args: SelectSubset<T, FuelExpenseDeleteArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FuelExpense.
     * @param {FuelExpenseUpdateArgs} args - Arguments to update one FuelExpense.
     * @example
     * // Update one FuelExpense
     * const fuelExpense = await prisma.fuelExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuelExpenseUpdateArgs>(args: SelectSubset<T, FuelExpenseUpdateArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FuelExpenses.
     * @param {FuelExpenseDeleteManyArgs} args - Arguments to filter FuelExpenses to delete.
     * @example
     * // Delete a few FuelExpenses
     * const { count } = await prisma.fuelExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuelExpenseDeleteManyArgs>(args?: SelectSubset<T, FuelExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuelExpenses
     * const fuelExpense = await prisma.fuelExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuelExpenseUpdateManyArgs>(args: SelectSubset<T, FuelExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FuelExpense.
     * @param {FuelExpenseUpsertArgs} args - Arguments to update or create a FuelExpense.
     * @example
     * // Update or create a FuelExpense
     * const fuelExpense = await prisma.fuelExpense.upsert({
     *   create: {
     *     // ... data to create a FuelExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuelExpense we want to update
     *   }
     * })
     */
    upsert<T extends FuelExpenseUpsertArgs>(args: SelectSubset<T, FuelExpenseUpsertArgs<ExtArgs>>): Prisma__FuelExpenseClient<$Result.GetResult<Prisma.$FuelExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FuelExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseCountArgs} args - Arguments to filter FuelExpenses to count.
     * @example
     * // Count the number of FuelExpenses
     * const count = await prisma.fuelExpense.count({
     *   where: {
     *     // ... the filter for the FuelExpenses we want to count
     *   }
     * })
    **/
    count<T extends FuelExpenseCountArgs>(
      args?: Subset<T, FuelExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuelExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuelExpenseAggregateArgs>(args: Subset<T, FuelExpenseAggregateArgs>): Prisma.PrismaPromise<GetFuelExpenseAggregateType<T>>

    /**
     * Group by FuelExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuelExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuelExpenseGroupByArgs['orderBy'] }
        : { orderBy?: FuelExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuelExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FuelExpense model
   */
  readonly fields: FuelExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FuelExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuelExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    trip<T extends FuelExpense$tripArgs<ExtArgs> = {}>(args?: Subset<T, FuelExpense$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FuelExpense model
   */ 
  interface FuelExpenseFieldRefs {
    readonly id: FieldRef<"FuelExpense", 'String'>
    readonly vehicleId: FieldRef<"FuelExpense", 'String'>
    readonly tripId: FieldRef<"FuelExpense", 'String'>
    readonly liters: FieldRef<"FuelExpense", 'Float'>
    readonly cost: FieldRef<"FuelExpense", 'Float'>
    readonly date: FieldRef<"FuelExpense", 'DateTime'>
    readonly createdAt: FieldRef<"FuelExpense", 'DateTime'>
    readonly updatedAt: FieldRef<"FuelExpense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FuelExpense findUnique
   */
  export type FuelExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FuelExpense to fetch.
     */
    where: FuelExpenseWhereUniqueInput
  }

  /**
   * FuelExpense findUniqueOrThrow
   */
  export type FuelExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FuelExpense to fetch.
     */
    where: FuelExpenseWhereUniqueInput
  }

  /**
   * FuelExpense findFirst
   */
  export type FuelExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FuelExpense to fetch.
     */
    where?: FuelExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelExpenses to fetch.
     */
    orderBy?: FuelExpenseOrderByWithRelationInput | FuelExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelExpenses.
     */
    cursor?: FuelExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelExpenses.
     */
    distinct?: FuelExpenseScalarFieldEnum | FuelExpenseScalarFieldEnum[]
  }

  /**
   * FuelExpense findFirstOrThrow
   */
  export type FuelExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FuelExpense to fetch.
     */
    where?: FuelExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelExpenses to fetch.
     */
    orderBy?: FuelExpenseOrderByWithRelationInput | FuelExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelExpenses.
     */
    cursor?: FuelExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelExpenses.
     */
    distinct?: FuelExpenseScalarFieldEnum | FuelExpenseScalarFieldEnum[]
  }

  /**
   * FuelExpense findMany
   */
  export type FuelExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * Filter, which FuelExpenses to fetch.
     */
    where?: FuelExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelExpenses to fetch.
     */
    orderBy?: FuelExpenseOrderByWithRelationInput | FuelExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FuelExpenses.
     */
    cursor?: FuelExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelExpenses.
     */
    skip?: number
    distinct?: FuelExpenseScalarFieldEnum | FuelExpenseScalarFieldEnum[]
  }

  /**
   * FuelExpense create
   */
  export type FuelExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a FuelExpense.
     */
    data: XOR<FuelExpenseCreateInput, FuelExpenseUncheckedCreateInput>
  }

  /**
   * FuelExpense createMany
   */
  export type FuelExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FuelExpenses.
     */
    data: FuelExpenseCreateManyInput | FuelExpenseCreateManyInput[]
  }

  /**
   * FuelExpense createManyAndReturn
   */
  export type FuelExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FuelExpenses.
     */
    data: FuelExpenseCreateManyInput | FuelExpenseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuelExpense update
   */
  export type FuelExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a FuelExpense.
     */
    data: XOR<FuelExpenseUpdateInput, FuelExpenseUncheckedUpdateInput>
    /**
     * Choose, which FuelExpense to update.
     */
    where: FuelExpenseWhereUniqueInput
  }

  /**
   * FuelExpense updateMany
   */
  export type FuelExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FuelExpenses.
     */
    data: XOR<FuelExpenseUpdateManyMutationInput, FuelExpenseUncheckedUpdateManyInput>
    /**
     * Filter which FuelExpenses to update
     */
    where?: FuelExpenseWhereInput
  }

  /**
   * FuelExpense upsert
   */
  export type FuelExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the FuelExpense to update in case it exists.
     */
    where: FuelExpenseWhereUniqueInput
    /**
     * In case the FuelExpense found by the `where` argument doesn't exist, create a new FuelExpense with this data.
     */
    create: XOR<FuelExpenseCreateInput, FuelExpenseUncheckedCreateInput>
    /**
     * In case the FuelExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuelExpenseUpdateInput, FuelExpenseUncheckedUpdateInput>
  }

  /**
   * FuelExpense delete
   */
  export type FuelExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
    /**
     * Filter which FuelExpense to delete.
     */
    where: FuelExpenseWhereUniqueInput
  }

  /**
   * FuelExpense deleteMany
   */
  export type FuelExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelExpenses to delete
     */
    where?: FuelExpenseWhereInput
  }

  /**
   * FuelExpense.trip
   */
  export type FuelExpense$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * FuelExpense without action
   */
  export type FuelExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelExpense
     */
    select?: FuelExpenseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    expiryDate: Date | null
    driverId: string | null
    vehicleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    expiryDate: Date | null
    driverId: string | null
    vehicleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    type: number
    name: number
    expiryDate: number
    driverId: number
    vehicleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    expiryDate?: true
    driverId?: true
    vehicleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    expiryDate?: true
    driverId?: true
    vehicleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    expiryDate?: true
    driverId?: true
    vehicleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    type: string
    name: string
    expiryDate: Date
    driverId: string | null
    vehicleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    expiryDate?: boolean
    driverId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Document$driverArgs<ExtArgs>
    vehicle?: boolean | Document$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    expiryDate?: boolean
    driverId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Document$driverArgs<ExtArgs>
    vehicle?: boolean | Document$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    expiryDate?: boolean
    driverId?: boolean
    vehicleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Document$driverArgs<ExtArgs>
    vehicle?: boolean | Document$vehicleArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Document$driverArgs<ExtArgs>
    vehicle?: boolean | Document$vehicleArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      name: string
      expiryDate: Date
      driverId: string | null
      vehicleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends Document$driverArgs<ExtArgs> = {}>(args?: Subset<T, Document$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    vehicle<T extends Document$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Document$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly expiryDate: FieldRef<"Document", 'DateTime'>
    readonly driverId: FieldRef<"Document", 'String'>
    readonly vehicleId: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
  }

  /**
   * Document.driver
   */
  export type Document$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Document.vehicle
   */
  export type Document$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    hoursWorked: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    hoursWorked: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    date: Date | null
    status: string | null
    hoursWorked: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    date: Date | null
    status: string | null
    hoursWorked: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    driverId: number
    date: number
    status: number
    hoursWorked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    hoursWorked?: true
  }

  export type AttendanceSumAggregateInputType = {
    hoursWorked?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    driverId?: true
    date?: true
    status?: true
    hoursWorked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    driverId?: true
    date?: true
    status?: true
    hoursWorked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    driverId?: true
    date?: true
    status?: true
    hoursWorked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    driverId: string
    date: Date
    status: string
    hoursWorked: number
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    date?: boolean
    status?: boolean
    hoursWorked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    date?: boolean
    status?: boolean
    hoursWorked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    driverId?: boolean
    date?: boolean
    status?: boolean
    hoursWorked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      date: Date
      status: string
      hoursWorked: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly driverId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly hoursWorked: FieldRef<"Attendance", 'Float'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Fine
   */

  export type AggregateFine = {
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  export type FineAvgAggregateOutputType = {
    amount: number | null
  }

  export type FineSumAggregateOutputType = {
    amount: number | null
  }

  export type FineMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    reason: string | null
    amount: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FineMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    reason: string | null
    amount: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FineCountAggregateOutputType = {
    id: number
    driverId: number
    reason: number
    amount: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FineAvgAggregateInputType = {
    amount?: true
  }

  export type FineSumAggregateInputType = {
    amount?: true
  }

  export type FineMinAggregateInputType = {
    id?: true
    driverId?: true
    reason?: true
    amount?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FineMaxAggregateInputType = {
    id?: true
    driverId?: true
    reason?: true
    amount?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FineCountAggregateInputType = {
    id?: true
    driverId?: true
    reason?: true
    amount?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fine to aggregate.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fines
    **/
    _count?: true | FineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineMaxAggregateInputType
  }

  export type GetFineAggregateType<T extends FineAggregateArgs> = {
        [P in keyof T & keyof AggregateFine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFine[P]>
      : GetScalarType<T[P], AggregateFine[P]>
  }




  export type FineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
    orderBy?: FineOrderByWithAggregationInput | FineOrderByWithAggregationInput[]
    by: FineScalarFieldEnum[] | FineScalarFieldEnum
    having?: FineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCountAggregateInputType | true
    _avg?: FineAvgAggregateInputType
    _sum?: FineSumAggregateInputType
    _min?: FineMinAggregateInputType
    _max?: FineMaxAggregateInputType
  }

  export type FineGroupByOutputType = {
    id: string
    driverId: string
    reason: string
    amount: number
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  type GetFineGroupByPayload<T extends FineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineGroupByOutputType[P]>
            : GetScalarType<T[P], FineGroupByOutputType[P]>
        }
      >
    >


  export type FineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    reason?: boolean
    amount?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    reason?: boolean
    amount?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectScalar = {
    id?: boolean
    driverId?: boolean
    reason?: boolean
    amount?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type FineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $FinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fine"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      reason: string
      amount: number
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fine"]>
    composites: {}
  }

  type FineGetPayload<S extends boolean | null | undefined | FineDefaultArgs> = $Result.GetResult<Prisma.$FinePayload, S>

  type FineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FineCountAggregateInputType | true
    }

  export interface FineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fine'], meta: { name: 'Fine' } }
    /**
     * Find zero or one Fine that matches the filter.
     * @param {FineFindUniqueArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FineFindUniqueArgs>(args: SelectSubset<T, FineFindUniqueArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FineFindUniqueOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FineFindUniqueOrThrowArgs>(args: SelectSubset<T, FineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FineFindFirstArgs>(args?: SelectSubset<T, FineFindFirstArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FineFindFirstOrThrowArgs>(args?: SelectSubset<T, FineFindFirstOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fine.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fineWithIdOnly = await prisma.fine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FineFindManyArgs>(args?: SelectSubset<T, FineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fine.
     * @param {FineCreateArgs} args - Arguments to create a Fine.
     * @example
     * // Create one Fine
     * const Fine = await prisma.fine.create({
     *   data: {
     *     // ... data to create a Fine
     *   }
     * })
     * 
     */
    create<T extends FineCreateArgs>(args: SelectSubset<T, FineCreateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fines.
     * @param {FineCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FineCreateManyArgs>(args?: SelectSubset<T, FineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fines and returns the data saved in the database.
     * @param {FineCreateManyAndReturnArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FineCreateManyAndReturnArgs>(args?: SelectSubset<T, FineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fine.
     * @param {FineDeleteArgs} args - Arguments to delete one Fine.
     * @example
     * // Delete one Fine
     * const Fine = await prisma.fine.delete({
     *   where: {
     *     // ... filter to delete one Fine
     *   }
     * })
     * 
     */
    delete<T extends FineDeleteArgs>(args: SelectSubset<T, FineDeleteArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fine.
     * @param {FineUpdateArgs} args - Arguments to update one Fine.
     * @example
     * // Update one Fine
     * const fine = await prisma.fine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FineUpdateArgs>(args: SelectSubset<T, FineUpdateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fines.
     * @param {FineDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FineDeleteManyArgs>(args?: SelectSubset<T, FineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FineUpdateManyArgs>(args: SelectSubset<T, FineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fine.
     * @param {FineUpsertArgs} args - Arguments to update or create a Fine.
     * @example
     * // Update or create a Fine
     * const fine = await prisma.fine.upsert({
     *   create: {
     *     // ... data to create a Fine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fine we want to update
     *   }
     * })
     */
    upsert<T extends FineUpsertArgs>(args: SelectSubset<T, FineUpsertArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fine.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends FineCountArgs>(
      args?: Subset<T, FineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FineAggregateArgs>(args: Subset<T, FineAggregateArgs>): Prisma.PrismaPromise<GetFineAggregateType<T>>

    /**
     * Group by Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FineGroupByArgs['orderBy'] }
        : { orderBy?: FineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fine model
   */
  readonly fields: FineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fine model
   */ 
  interface FineFieldRefs {
    readonly id: FieldRef<"Fine", 'String'>
    readonly driverId: FieldRef<"Fine", 'String'>
    readonly reason: FieldRef<"Fine", 'String'>
    readonly amount: FieldRef<"Fine", 'Float'>
    readonly date: FieldRef<"Fine", 'DateTime'>
    readonly createdAt: FieldRef<"Fine", 'DateTime'>
    readonly updatedAt: FieldRef<"Fine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fine findUnique
   */
  export type FineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findUniqueOrThrow
   */
  export type FineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findFirst
   */
  export type FineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findFirstOrThrow
   */
  export type FineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findMany
   */
  export type FineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fines to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine create
   */
  export type FineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to create a Fine.
     */
    data: XOR<FineCreateInput, FineUncheckedCreateInput>
  }

  /**
   * Fine createMany
   */
  export type FineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
  }

  /**
   * Fine createManyAndReturn
   */
  export type FineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fine update
   */
  export type FineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to update a Fine.
     */
    data: XOR<FineUpdateInput, FineUncheckedUpdateInput>
    /**
     * Choose, which Fine to update.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine updateMany
   */
  export type FineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
  }

  /**
   * Fine upsert
   */
  export type FineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The filter to search for the Fine to update in case it exists.
     */
    where: FineWhereUniqueInput
    /**
     * In case the Fine found by the `where` argument doesn't exist, create a new Fine with this data.
     */
    create: XOR<FineCreateInput, FineUncheckedCreateInput>
    /**
     * In case the Fine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FineUpdateInput, FineUncheckedUpdateInput>
  }

  /**
   * Fine delete
   */
  export type FineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter which Fine to delete.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine deleteMany
   */
  export type FineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fines to delete
     */
    where?: FineWhereInput
  }

  /**
   * Fine without action
   */
  export type FineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    regNumber: 'regNumber',
    name: 'name',
    model: 'model',
    type: 'type',
    maxLoadCapacity: 'maxLoadCapacity',
    odometer: 'odometer',
    acquisitionCost: 'acquisitionCost',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    licenseNumber: 'licenseNumber',
    licenseCategory: 'licenseCategory',
    licenseExpiryDate: 'licenseExpiryDate',
    contactNumber: 'contactNumber',
    safetyScore: 'safetyScore',
    status: 'status',
    salary: 'salary',
    joinDate: 'joinDate',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    source: 'source',
    destination: 'destination',
    cargoWeight: 'cargoWeight',
    distance: 'distance',
    status: 'status',
    vehicleId: 'vehicleId',
    driverId: 'driverId',
    startTime: 'startTime',
    endTime: 'endTime',
    fuelConsumed: 'fuelConsumed',
    startOdometer: 'startOdometer',
    endOdometer: 'endOdometer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const MaintenanceLogScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    type: 'type',
    cost: 'cost',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceLogScalarFieldEnum = (typeof MaintenanceLogScalarFieldEnum)[keyof typeof MaintenanceLogScalarFieldEnum]


  export const FuelExpenseScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    tripId: 'tripId',
    liters: 'liters',
    cost: 'cost',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuelExpenseScalarFieldEnum = (typeof FuelExpenseScalarFieldEnum)[keyof typeof FuelExpenseScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    expiryDate: 'expiryDate',
    driverId: 'driverId',
    vehicleId: 'vehicleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    date: 'date',
    status: 'status',
    hoursWorked: 'hoursWorked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const FineScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    reason: 'reason',
    amount: 'amount',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FineScalarFieldEnum = (typeof FineScalarFieldEnum)[keyof typeof FineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    regNumber?: StringFilter<"Vehicle"> | string
    name?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    type?: StringFilter<"Vehicle"> | string
    maxLoadCapacity?: FloatFilter<"Vehicle"> | number
    odometer?: FloatFilter<"Vehicle"> | number
    acquisitionCost?: FloatFilter<"Vehicle"> | number
    status?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    trips?: TripListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    fuelExpenses?: FuelExpenseListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    regNumber?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    maintenanceLogs?: MaintenanceLogOrderByRelationAggregateInput
    fuelExpenses?: FuelExpenseOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    regNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    name?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    type?: StringFilter<"Vehicle"> | string
    maxLoadCapacity?: FloatFilter<"Vehicle"> | number
    odometer?: FloatFilter<"Vehicle"> | number
    acquisitionCost?: FloatFilter<"Vehicle"> | number
    status?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    trips?: TripListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    fuelExpenses?: FuelExpenseListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id" | "regNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    regNumber?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    regNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    name?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    type?: StringWithAggregatesFilter<"Vehicle"> | string
    maxLoadCapacity?: FloatWithAggregatesFilter<"Vehicle"> | number
    odometer?: FloatWithAggregatesFilter<"Vehicle"> | number
    acquisitionCost?: FloatWithAggregatesFilter<"Vehicle"> | number
    status?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    licenseNumber?: StringFilter<"Driver"> | string
    licenseCategory?: StringFilter<"Driver"> | string
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    contactNumber?: StringFilter<"Driver"> | string
    safetyScore?: FloatFilter<"Driver"> | number
    status?: StringFilter<"Driver"> | string
    salary?: FloatFilter<"Driver"> | number
    joinDate?: DateTimeFilter<"Driver"> | Date | string
    rating?: FloatFilter<"Driver"> | number
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    trips?: TripListRelationFilter
    documents?: DocumentListRelationFilter
    attendances?: AttendanceListRelationFilter
    fines?: FineListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    joinDate?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    fines?: FineOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseNumber?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    licenseCategory?: StringFilter<"Driver"> | string
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    contactNumber?: StringFilter<"Driver"> | string
    safetyScore?: FloatFilter<"Driver"> | number
    status?: StringFilter<"Driver"> | string
    salary?: FloatFilter<"Driver"> | number
    joinDate?: DateTimeFilter<"Driver"> | Date | string
    rating?: FloatFilter<"Driver"> | number
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    trips?: TripListRelationFilter
    documents?: DocumentListRelationFilter
    attendances?: AttendanceListRelationFilter
    fines?: FineListRelationFilter
  }, "id" | "licenseNumber">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    joinDate?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    name?: StringWithAggregatesFilter<"Driver"> | string
    licenseNumber?: StringWithAggregatesFilter<"Driver"> | string
    licenseCategory?: StringWithAggregatesFilter<"Driver"> | string
    licenseExpiryDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    contactNumber?: StringWithAggregatesFilter<"Driver"> | string
    safetyScore?: FloatWithAggregatesFilter<"Driver"> | number
    status?: StringWithAggregatesFilter<"Driver"> | string
    salary?: FloatWithAggregatesFilter<"Driver"> | number
    joinDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    rating?: FloatWithAggregatesFilter<"Driver"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    source?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    cargoWeight?: FloatFilter<"Trip"> | number
    distance?: FloatFilter<"Trip"> | number
    status?: StringFilter<"Trip"> | string
    vehicleId?: StringFilter<"Trip"> | string
    driverId?: StringFilter<"Trip"> | string
    startTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    fuelConsumed?: FloatNullableFilter<"Trip"> | number | null
    startOdometer?: FloatNullableFilter<"Trip"> | number | null
    endOdometer?: FloatNullableFilter<"Trip"> | number | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
    fuelExpenses?: FuelExpenseListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    cargoWeight?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    fuelConsumed?: SortOrderInput | SortOrder
    startOdometer?: SortOrderInput | SortOrder
    endOdometer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    fuelExpenses?: FuelExpenseOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    source?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    cargoWeight?: FloatFilter<"Trip"> | number
    distance?: FloatFilter<"Trip"> | number
    status?: StringFilter<"Trip"> | string
    vehicleId?: StringFilter<"Trip"> | string
    driverId?: StringFilter<"Trip"> | string
    startTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    fuelConsumed?: FloatNullableFilter<"Trip"> | number | null
    startOdometer?: FloatNullableFilter<"Trip"> | number | null
    endOdometer?: FloatNullableFilter<"Trip"> | number | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
    fuelExpenses?: FuelExpenseListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    cargoWeight?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    fuelConsumed?: SortOrderInput | SortOrder
    startOdometer?: SortOrderInput | SortOrder
    endOdometer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    source?: StringWithAggregatesFilter<"Trip"> | string
    destination?: StringWithAggregatesFilter<"Trip"> | string
    cargoWeight?: FloatWithAggregatesFilter<"Trip"> | number
    distance?: FloatWithAggregatesFilter<"Trip"> | number
    status?: StringWithAggregatesFilter<"Trip"> | string
    vehicleId?: StringWithAggregatesFilter<"Trip"> | string
    driverId?: StringWithAggregatesFilter<"Trip"> | string
    startTime?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    fuelConsumed?: FloatNullableWithAggregatesFilter<"Trip"> | number | null
    startOdometer?: FloatNullableWithAggregatesFilter<"Trip"> | number | null
    endOdometer?: FloatNullableWithAggregatesFilter<"Trip"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type MaintenanceLogWhereInput = {
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    id?: StringFilter<"MaintenanceLog"> | string
    vehicleId?: StringFilter<"MaintenanceLog"> | string
    type?: StringFilter<"MaintenanceLog"> | string
    cost?: FloatFilter<"MaintenanceLog"> | number
    date?: DateTimeFilter<"MaintenanceLog"> | Date | string
    status?: StringFilter<"MaintenanceLog"> | string
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }

  export type MaintenanceLogOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type MaintenanceLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    vehicleId?: StringFilter<"MaintenanceLog"> | string
    type?: StringFilter<"MaintenanceLog"> | string
    cost?: FloatFilter<"MaintenanceLog"> | number
    date?: DateTimeFilter<"MaintenanceLog"> | Date | string
    status?: StringFilter<"MaintenanceLog"> | string
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }, "id">

  export type MaintenanceLogOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceLogCountOrderByAggregateInput
    _avg?: MaintenanceLogAvgOrderByAggregateInput
    _max?: MaintenanceLogMaxOrderByAggregateInput
    _min?: MaintenanceLogMinOrderByAggregateInput
    _sum?: MaintenanceLogSumOrderByAggregateInput
  }

  export type MaintenanceLogScalarWhereWithAggregatesInput = {
    AND?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    OR?: MaintenanceLogScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    vehicleId?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    type?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    cost?: FloatWithAggregatesFilter<"MaintenanceLog"> | number
    date?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
    status?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
  }

  export type FuelExpenseWhereInput = {
    AND?: FuelExpenseWhereInput | FuelExpenseWhereInput[]
    OR?: FuelExpenseWhereInput[]
    NOT?: FuelExpenseWhereInput | FuelExpenseWhereInput[]
    id?: StringFilter<"FuelExpense"> | string
    vehicleId?: StringFilter<"FuelExpense"> | string
    tripId?: StringNullableFilter<"FuelExpense"> | string | null
    liters?: FloatFilter<"FuelExpense"> | number
    cost?: FloatFilter<"FuelExpense"> | number
    date?: DateTimeFilter<"FuelExpense"> | Date | string
    createdAt?: DateTimeFilter<"FuelExpense"> | Date | string
    updatedAt?: DateTimeFilter<"FuelExpense"> | Date | string
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    trip?: XOR<TripNullableRelationFilter, TripWhereInput> | null
  }

  export type FuelExpenseOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type FuelExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuelExpenseWhereInput | FuelExpenseWhereInput[]
    OR?: FuelExpenseWhereInput[]
    NOT?: FuelExpenseWhereInput | FuelExpenseWhereInput[]
    vehicleId?: StringFilter<"FuelExpense"> | string
    tripId?: StringNullableFilter<"FuelExpense"> | string | null
    liters?: FloatFilter<"FuelExpense"> | number
    cost?: FloatFilter<"FuelExpense"> | number
    date?: DateTimeFilter<"FuelExpense"> | Date | string
    createdAt?: DateTimeFilter<"FuelExpense"> | Date | string
    updatedAt?: DateTimeFilter<"FuelExpense"> | Date | string
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    trip?: XOR<TripNullableRelationFilter, TripWhereInput> | null
  }, "id">

  export type FuelExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuelExpenseCountOrderByAggregateInput
    _avg?: FuelExpenseAvgOrderByAggregateInput
    _max?: FuelExpenseMaxOrderByAggregateInput
    _min?: FuelExpenseMinOrderByAggregateInput
    _sum?: FuelExpenseSumOrderByAggregateInput
  }

  export type FuelExpenseScalarWhereWithAggregatesInput = {
    AND?: FuelExpenseScalarWhereWithAggregatesInput | FuelExpenseScalarWhereWithAggregatesInput[]
    OR?: FuelExpenseScalarWhereWithAggregatesInput[]
    NOT?: FuelExpenseScalarWhereWithAggregatesInput | FuelExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FuelExpense"> | string
    vehicleId?: StringWithAggregatesFilter<"FuelExpense"> | string
    tripId?: StringNullableWithAggregatesFilter<"FuelExpense"> | string | null
    liters?: FloatWithAggregatesFilter<"FuelExpense"> | number
    cost?: FloatWithAggregatesFilter<"FuelExpense"> | number
    date?: DateTimeWithAggregatesFilter<"FuelExpense"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FuelExpense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FuelExpense"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    expiryDate?: DateTimeFilter<"Document"> | Date | string
    driverId?: StringNullableFilter<"Document"> | string | null
    vehicleId?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    driver?: XOR<DriverNullableRelationFilter, DriverWhereInput> | null
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    expiryDate?: SortOrder
    driverId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    type?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    expiryDate?: DateTimeFilter<"Document"> | Date | string
    driverId?: StringNullableFilter<"Document"> | string | null
    vehicleId?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    driver?: XOR<DriverNullableRelationFilter, DriverWhereInput> | null
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    expiryDate?: SortOrder
    driverId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    expiryDate?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    driverId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    vehicleId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    driverId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    hoursWorked?: FloatFilter<"Attendance"> | number
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    hoursWorked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    driverId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    hoursWorked?: FloatFilter<"Attendance"> | number
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    hoursWorked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    driverId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
    hoursWorked?: FloatWithAggregatesFilter<"Attendance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type FineWhereInput = {
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    id?: StringFilter<"Fine"> | string
    driverId?: StringFilter<"Fine"> | string
    reason?: StringFilter<"Fine"> | string
    amount?: FloatFilter<"Fine"> | number
    date?: DateTimeFilter<"Fine"> | Date | string
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
  }

  export type FineOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type FineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    driverId?: StringFilter<"Fine"> | string
    reason?: StringFilter<"Fine"> | string
    amount?: FloatFilter<"Fine"> | number
    date?: DateTimeFilter<"Fine"> | Date | string
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    driver?: XOR<DriverRelationFilter, DriverWhereInput>
  }, "id">

  export type FineOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FineCountOrderByAggregateInput
    _avg?: FineAvgOrderByAggregateInput
    _max?: FineMaxOrderByAggregateInput
    _min?: FineMinOrderByAggregateInput
    _sum?: FineSumOrderByAggregateInput
  }

  export type FineScalarWhereWithAggregatesInput = {
    AND?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    OR?: FineScalarWhereWithAggregatesInput[]
    NOT?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fine"> | string
    driverId?: StringWithAggregatesFilter<"Fine"> | string
    reason?: StringWithAggregatesFilter<"Fine"> | string
    amount?: FloatWithAggregatesFilter<"Fine"> | number
    date?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutVehicleInput
    documents?: DocumentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutVehicleInput
    documents?: DocumentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    attendances?: AttendanceCreateNestedManyWithoutDriverInput
    fines?: FineCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDriverInput
    fines?: FineUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUpdateManyWithoutDriverNestedInput
    fines?: FineUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutDriverNestedInput
    fines?: FineUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: DriverCreateNestedOneWithoutTripsInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    vehicleId: string
    driverId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    vehicleId: string
    driverId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateInput = {
    id?: string
    type: string
    cost: number
    date?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceLogsInput
  }

  export type MaintenanceLogUncheckedCreateInput = {
    id?: string
    vehicleId: string
    type: string
    cost: number
    date?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput
  }

  export type MaintenanceLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateManyInput = {
    id?: string
    vehicleId: string
    type: string
    cost: number
    date?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseCreateInput = {
    id?: string
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutFuelExpensesInput
    trip?: TripCreateNestedOneWithoutFuelExpensesInput
  }

  export type FuelExpenseUncheckedCreateInput = {
    id?: string
    vehicleId: string
    tripId?: string | null
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutFuelExpensesNestedInput
    trip?: TripUpdateOneWithoutFuelExpensesNestedInput
  }

  export type FuelExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseCreateManyInput = {
    id?: string
    vehicleId: string
    tripId?: string | null
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutDocumentsInput
    vehicle?: VehicleCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    driverId?: string | null
    vehicleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutDocumentsNestedInput
    vehicle?: VehicleUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    driverId?: string | null
    vehicleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date?: Date | string
    status?: string
    hoursWorked?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    driverId: string
    date?: Date | string
    status?: string
    hoursWorked?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    driverId: string
    date?: Date | string
    status?: string
    hoursWorked?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineCreateInput = {
    id?: string
    reason: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutFinesInput
  }

  export type FineUncheckedCreateInput = {
    id?: string
    driverId: string
    reason: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutFinesNestedInput
  }

  export type FineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineCreateManyInput = {
    id?: string
    driverId: string
    reason: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type MaintenanceLogListRelationFilter = {
    every?: MaintenanceLogWhereInput
    some?: MaintenanceLogWhereInput
    none?: MaintenanceLogWhereInput
  }

  export type FuelExpenseListRelationFilter = {
    every?: FuelExpenseWhereInput
    some?: FuelExpenseWhereInput
    none?: FuelExpenseWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuelExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    regNumber?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    regNumber?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    regNumber?: SortOrder
    name?: SortOrder
    model?: SortOrder
    type?: SortOrder
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    maxLoadCapacity?: SortOrder
    odometer?: SortOrder
    acquisitionCost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type FineListRelationFilter = {
    every?: FineWhereInput
    some?: FineWhereInput
    none?: FineWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    joinDate?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    safetyScore?: SortOrder
    salary?: SortOrder
    rating?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    joinDate?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    joinDate?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    safetyScore?: SortOrder
    salary?: SortOrder
    rating?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DriverRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    cargoWeight?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    fuelConsumed?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    cargoWeight?: SortOrder
    distance?: SortOrder
    fuelConsumed?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    cargoWeight?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    fuelConsumed?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    cargoWeight?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    fuelConsumed?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    cargoWeight?: SortOrder
    distance?: SortOrder
    fuelConsumed?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MaintenanceLogCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceLogAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type MaintenanceLogMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceLogMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceLogSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TripNullableRelationFilter = {
    is?: TripWhereInput | null
    isNot?: TripWhereInput | null
  }

  export type FuelExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelExpenseAvgOrderByAggregateInput = {
    liters?: SortOrder
    cost?: SortOrder
  }

  export type FuelExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelExpenseSumOrderByAggregateInput = {
    liters?: SortOrder
    cost?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DriverNullableRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type VehicleNullableRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    expiryDate?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    expiryDate?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    expiryDate?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    hoursWorked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    hoursWorked?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    hoursWorked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    hoursWorked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    hoursWorked?: SortOrder
  }

  export type FineCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FineAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FineMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FineMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    reason?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FineSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MaintenanceLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type FuelExpenseCreateNestedManyWithoutVehicleInput = {
    create?: XOR<FuelExpenseCreateWithoutVehicleInput, FuelExpenseUncheckedCreateWithoutVehicleInput> | FuelExpenseCreateWithoutVehicleInput[] | FuelExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutVehicleInput | FuelExpenseCreateOrConnectWithoutVehicleInput[]
    createMany?: FuelExpenseCreateManyVehicleInputEnvelope
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DocumentCreateWithoutVehicleInput, DocumentUncheckedCreateWithoutVehicleInput> | DocumentCreateWithoutVehicleInput[] | DocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVehicleInput | DocumentCreateOrConnectWithoutVehicleInput[]
    createMany?: DocumentCreateManyVehicleInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type FuelExpenseUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<FuelExpenseCreateWithoutVehicleInput, FuelExpenseUncheckedCreateWithoutVehicleInput> | FuelExpenseCreateWithoutVehicleInput[] | FuelExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutVehicleInput | FuelExpenseCreateOrConnectWithoutVehicleInput[]
    createMany?: FuelExpenseCreateManyVehicleInputEnvelope
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DocumentCreateWithoutVehicleInput, DocumentUncheckedCreateWithoutVehicleInput> | DocumentCreateWithoutVehicleInput[] | DocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVehicleInput | DocumentCreateOrConnectWithoutVehicleInput[]
    createMany?: DocumentCreateManyVehicleInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MaintenanceLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutVehicleInput | MaintenanceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type FuelExpenseUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<FuelExpenseCreateWithoutVehicleInput, FuelExpenseUncheckedCreateWithoutVehicleInput> | FuelExpenseCreateWithoutVehicleInput[] | FuelExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutVehicleInput | FuelExpenseCreateOrConnectWithoutVehicleInput[]
    upsert?: FuelExpenseUpsertWithWhereUniqueWithoutVehicleInput | FuelExpenseUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: FuelExpenseCreateManyVehicleInputEnvelope
    set?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    disconnect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    delete?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    update?: FuelExpenseUpdateWithWhereUniqueWithoutVehicleInput | FuelExpenseUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: FuelExpenseUpdateManyWithWhereWithoutVehicleInput | FuelExpenseUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: FuelExpenseScalarWhereInput | FuelExpenseScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DocumentCreateWithoutVehicleInput, DocumentUncheckedCreateWithoutVehicleInput> | DocumentCreateWithoutVehicleInput[] | DocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVehicleInput | DocumentCreateOrConnectWithoutVehicleInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutVehicleInput | DocumentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DocumentCreateManyVehicleInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutVehicleInput | DocumentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutVehicleInput | DocumentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutVehicleInput | MaintenanceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type FuelExpenseUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<FuelExpenseCreateWithoutVehicleInput, FuelExpenseUncheckedCreateWithoutVehicleInput> | FuelExpenseCreateWithoutVehicleInput[] | FuelExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutVehicleInput | FuelExpenseCreateOrConnectWithoutVehicleInput[]
    upsert?: FuelExpenseUpsertWithWhereUniqueWithoutVehicleInput | FuelExpenseUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: FuelExpenseCreateManyVehicleInputEnvelope
    set?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    disconnect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    delete?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    update?: FuelExpenseUpdateWithWhereUniqueWithoutVehicleInput | FuelExpenseUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: FuelExpenseUpdateManyWithWhereWithoutVehicleInput | FuelExpenseUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: FuelExpenseScalarWhereInput | FuelExpenseScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DocumentCreateWithoutVehicleInput, DocumentUncheckedCreateWithoutVehicleInput> | DocumentCreateWithoutVehicleInput[] | DocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVehicleInput | DocumentCreateOrConnectWithoutVehicleInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutVehicleInput | DocumentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DocumentCreateManyVehicleInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutVehicleInput | DocumentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutVehicleInput | DocumentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TripCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutDriverInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutDriverInput = {
    create?: XOR<AttendanceCreateWithoutDriverInput, AttendanceUncheckedCreateWithoutDriverInput> | AttendanceCreateWithoutDriverInput[] | AttendanceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDriverInput | AttendanceCreateOrConnectWithoutDriverInput[]
    createMany?: AttendanceCreateManyDriverInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FineCreateNestedManyWithoutDriverInput = {
    create?: XOR<FineCreateWithoutDriverInput, FineUncheckedCreateWithoutDriverInput> | FineCreateWithoutDriverInput[] | FineUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FineCreateOrConnectWithoutDriverInput | FineCreateOrConnectWithoutDriverInput[]
    createMany?: FineCreateManyDriverInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<AttendanceCreateWithoutDriverInput, AttendanceUncheckedCreateWithoutDriverInput> | AttendanceCreateWithoutDriverInput[] | AttendanceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDriverInput | AttendanceCreateOrConnectWithoutDriverInput[]
    createMany?: AttendanceCreateManyDriverInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FineUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<FineCreateWithoutDriverInput, FineUncheckedCreateWithoutDriverInput> | FineCreateWithoutDriverInput[] | FineUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FineCreateOrConnectWithoutDriverInput | FineCreateOrConnectWithoutDriverInput[]
    createMany?: FineCreateManyDriverInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type TripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDriverInput | DocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDriverInput | DocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDriverInput | DocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutDriverNestedInput = {
    create?: XOR<AttendanceCreateWithoutDriverInput, AttendanceUncheckedCreateWithoutDriverInput> | AttendanceCreateWithoutDriverInput[] | AttendanceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDriverInput | AttendanceCreateOrConnectWithoutDriverInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutDriverInput | AttendanceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: AttendanceCreateManyDriverInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutDriverInput | AttendanceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutDriverInput | AttendanceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FineUpdateManyWithoutDriverNestedInput = {
    create?: XOR<FineCreateWithoutDriverInput, FineUncheckedCreateWithoutDriverInput> | FineCreateWithoutDriverInput[] | FineUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FineCreateOrConnectWithoutDriverInput | FineCreateOrConnectWithoutDriverInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutDriverInput | FineUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: FineCreateManyDriverInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutDriverInput | FineUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: FineUpdateManyWithWhereWithoutDriverInput | FineUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput> | DocumentCreateWithoutDriverInput[] | DocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDriverInput | DocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDriverInput | DocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DocumentCreateManyDriverInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDriverInput | DocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDriverInput | DocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<AttendanceCreateWithoutDriverInput, AttendanceUncheckedCreateWithoutDriverInput> | AttendanceCreateWithoutDriverInput[] | AttendanceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutDriverInput | AttendanceCreateOrConnectWithoutDriverInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutDriverInput | AttendanceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: AttendanceCreateManyDriverInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutDriverInput | AttendanceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutDriverInput | AttendanceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FineUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<FineCreateWithoutDriverInput, FineUncheckedCreateWithoutDriverInput> | FineCreateWithoutDriverInput[] | FineUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FineCreateOrConnectWithoutDriverInput | FineCreateOrConnectWithoutDriverInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutDriverInput | FineUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: FineCreateManyDriverInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutDriverInput | FineUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: FineUpdateManyWithWhereWithoutDriverInput | FineUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutTripsInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutTripsInput = {
    create?: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTripsInput
    connect?: DriverWhereUniqueInput
  }

  export type FuelExpenseCreateNestedManyWithoutTripInput = {
    create?: XOR<FuelExpenseCreateWithoutTripInput, FuelExpenseUncheckedCreateWithoutTripInput> | FuelExpenseCreateWithoutTripInput[] | FuelExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutTripInput | FuelExpenseCreateOrConnectWithoutTripInput[]
    createMany?: FuelExpenseCreateManyTripInputEnvelope
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
  }

  export type FuelExpenseUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<FuelExpenseCreateWithoutTripInput, FuelExpenseUncheckedCreateWithoutTripInput> | FuelExpenseCreateWithoutTripInput[] | FuelExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutTripInput | FuelExpenseCreateOrConnectWithoutTripInput[]
    createMany?: FuelExpenseCreateManyTripInputEnvelope
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    upsert?: VehicleUpsertWithoutTripsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTripsInput, VehicleUpdateWithoutTripsInput>, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type DriverUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTripsInput
    upsert?: DriverUpsertWithoutTripsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutTripsInput, DriverUpdateWithoutTripsInput>, DriverUncheckedUpdateWithoutTripsInput>
  }

  export type FuelExpenseUpdateManyWithoutTripNestedInput = {
    create?: XOR<FuelExpenseCreateWithoutTripInput, FuelExpenseUncheckedCreateWithoutTripInput> | FuelExpenseCreateWithoutTripInput[] | FuelExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutTripInput | FuelExpenseCreateOrConnectWithoutTripInput[]
    upsert?: FuelExpenseUpsertWithWhereUniqueWithoutTripInput | FuelExpenseUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: FuelExpenseCreateManyTripInputEnvelope
    set?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    disconnect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    delete?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    update?: FuelExpenseUpdateWithWhereUniqueWithoutTripInput | FuelExpenseUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: FuelExpenseUpdateManyWithWhereWithoutTripInput | FuelExpenseUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: FuelExpenseScalarWhereInput | FuelExpenseScalarWhereInput[]
  }

  export type FuelExpenseUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<FuelExpenseCreateWithoutTripInput, FuelExpenseUncheckedCreateWithoutTripInput> | FuelExpenseCreateWithoutTripInput[] | FuelExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelExpenseCreateOrConnectWithoutTripInput | FuelExpenseCreateOrConnectWithoutTripInput[]
    upsert?: FuelExpenseUpsertWithWhereUniqueWithoutTripInput | FuelExpenseUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: FuelExpenseCreateManyTripInputEnvelope
    set?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    disconnect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    delete?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    connect?: FuelExpenseWhereUniqueInput | FuelExpenseWhereUniqueInput[]
    update?: FuelExpenseUpdateWithWhereUniqueWithoutTripInput | FuelExpenseUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: FuelExpenseUpdateManyWithWhereWithoutTripInput | FuelExpenseUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: FuelExpenseScalarWhereInput | FuelExpenseScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceLogsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceLogsInput
    upsert?: VehicleUpsertWithoutMaintenanceLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceLogsInput, VehicleUpdateWithoutMaintenanceLogsInput>, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type VehicleCreateNestedOneWithoutFuelExpensesInput = {
    create?: XOR<VehicleCreateWithoutFuelExpensesInput, VehicleUncheckedCreateWithoutFuelExpensesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutFuelExpensesInput
    connect?: VehicleWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutFuelExpensesInput = {
    create?: XOR<TripCreateWithoutFuelExpensesInput, TripUncheckedCreateWithoutFuelExpensesInput>
    connectOrCreate?: TripCreateOrConnectWithoutFuelExpensesInput
    connect?: TripWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutFuelExpensesNestedInput = {
    create?: XOR<VehicleCreateWithoutFuelExpensesInput, VehicleUncheckedCreateWithoutFuelExpensesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutFuelExpensesInput
    upsert?: VehicleUpsertWithoutFuelExpensesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutFuelExpensesInput, VehicleUpdateWithoutFuelExpensesInput>, VehicleUncheckedUpdateWithoutFuelExpensesInput>
  }

  export type TripUpdateOneWithoutFuelExpensesNestedInput = {
    create?: XOR<TripCreateWithoutFuelExpensesInput, TripUncheckedCreateWithoutFuelExpensesInput>
    connectOrCreate?: TripCreateOrConnectWithoutFuelExpensesInput
    upsert?: TripUpsertWithoutFuelExpensesInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutFuelExpensesInput, TripUpdateWithoutFuelExpensesInput>, TripUncheckedUpdateWithoutFuelExpensesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DriverCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDocumentsInput
    connect?: DriverWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDocumentsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DriverUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDocumentsInput
    upsert?: DriverUpsertWithoutDocumentsInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutDocumentsInput, DriverUpdateWithoutDocumentsInput>, DriverUncheckedUpdateWithoutDocumentsInput>
  }

  export type VehicleUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDocumentsInput
    upsert?: VehicleUpsertWithoutDocumentsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDocumentsInput, VehicleUpdateWithoutDocumentsInput>, VehicleUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<DriverCreateWithoutAttendancesInput, DriverUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutAttendancesInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<DriverCreateWithoutAttendancesInput, DriverUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutAttendancesInput
    upsert?: DriverUpsertWithoutAttendancesInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutAttendancesInput, DriverUpdateWithoutAttendancesInput>, DriverUncheckedUpdateWithoutAttendancesInput>
  }

  export type DriverCreateNestedOneWithoutFinesInput = {
    create?: XOR<DriverCreateWithoutFinesInput, DriverUncheckedCreateWithoutFinesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutFinesInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutFinesNestedInput = {
    create?: XOR<DriverCreateWithoutFinesInput, DriverUncheckedCreateWithoutFinesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutFinesInput
    upsert?: DriverUpsertWithoutFinesInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutFinesInput, DriverUpdateWithoutFinesInput>, DriverUncheckedUpdateWithoutFinesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TripCreateWithoutVehicleInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutTripsInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutVehicleInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    driverId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutVehicleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripCreateManyVehicleInputEnvelope = {
    data: TripCreateManyVehicleInput | TripCreateManyVehicleInput[]
  }

  export type MaintenanceLogCreateWithoutVehicleInput = {
    id?: string
    type: string
    cost: number
    date?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogUncheckedCreateWithoutVehicleInput = {
    id?: string
    type: string
    cost: number
    date?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    create: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceLogCreateManyVehicleInputEnvelope = {
    data: MaintenanceLogCreateManyVehicleInput | MaintenanceLogCreateManyVehicleInput[]
  }

  export type FuelExpenseCreateWithoutVehicleInput = {
    id?: string
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip?: TripCreateNestedOneWithoutFuelExpensesInput
  }

  export type FuelExpenseUncheckedCreateWithoutVehicleInput = {
    id?: string
    tripId?: string | null
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelExpenseCreateOrConnectWithoutVehicleInput = {
    where: FuelExpenseWhereUniqueInput
    create: XOR<FuelExpenseCreateWithoutVehicleInput, FuelExpenseUncheckedCreateWithoutVehicleInput>
  }

  export type FuelExpenseCreateManyVehicleInputEnvelope = {
    data: FuelExpenseCreateManyVehicleInput | FuelExpenseCreateManyVehicleInput[]
  }

  export type DocumentCreateWithoutVehicleInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutVehicleInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    driverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutVehicleInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutVehicleInput, DocumentUncheckedCreateWithoutVehicleInput>
  }

  export type DocumentCreateManyVehicleInputEnvelope = {
    data: DocumentCreateManyVehicleInput | DocumentCreateManyVehicleInput[]
  }

  export type TripUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
  }

  export type TripUpdateManyWithWhereWithoutVehicleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutVehicleInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    source?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    cargoWeight?: FloatFilter<"Trip"> | number
    distance?: FloatFilter<"Trip"> | number
    status?: StringFilter<"Trip"> | string
    vehicleId?: StringFilter<"Trip"> | string
    driverId?: StringFilter<"Trip"> | string
    startTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    fuelConsumed?: FloatNullableFilter<"Trip"> | number | null
    startOdometer?: FloatNullableFilter<"Trip"> | number | null
    endOdometer?: FloatNullableFilter<"Trip"> | number | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    update: XOR<MaintenanceLogUpdateWithoutVehicleInput, MaintenanceLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    data: XOR<MaintenanceLogUpdateWithoutVehicleInput, MaintenanceLogUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceLogUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceLogScalarWhereInput
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceLogScalarWhereInput = {
    AND?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    OR?: MaintenanceLogScalarWhereInput[]
    NOT?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    id?: StringFilter<"MaintenanceLog"> | string
    vehicleId?: StringFilter<"MaintenanceLog"> | string
    type?: StringFilter<"MaintenanceLog"> | string
    cost?: FloatFilter<"MaintenanceLog"> | number
    date?: DateTimeFilter<"MaintenanceLog"> | Date | string
    status?: StringFilter<"MaintenanceLog"> | string
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
  }

  export type FuelExpenseUpsertWithWhereUniqueWithoutVehicleInput = {
    where: FuelExpenseWhereUniqueInput
    update: XOR<FuelExpenseUpdateWithoutVehicleInput, FuelExpenseUncheckedUpdateWithoutVehicleInput>
    create: XOR<FuelExpenseCreateWithoutVehicleInput, FuelExpenseUncheckedCreateWithoutVehicleInput>
  }

  export type FuelExpenseUpdateWithWhereUniqueWithoutVehicleInput = {
    where: FuelExpenseWhereUniqueInput
    data: XOR<FuelExpenseUpdateWithoutVehicleInput, FuelExpenseUncheckedUpdateWithoutVehicleInput>
  }

  export type FuelExpenseUpdateManyWithWhereWithoutVehicleInput = {
    where: FuelExpenseScalarWhereInput
    data: XOR<FuelExpenseUpdateManyMutationInput, FuelExpenseUncheckedUpdateManyWithoutVehicleInput>
  }

  export type FuelExpenseScalarWhereInput = {
    AND?: FuelExpenseScalarWhereInput | FuelExpenseScalarWhereInput[]
    OR?: FuelExpenseScalarWhereInput[]
    NOT?: FuelExpenseScalarWhereInput | FuelExpenseScalarWhereInput[]
    id?: StringFilter<"FuelExpense"> | string
    vehicleId?: StringFilter<"FuelExpense"> | string
    tripId?: StringNullableFilter<"FuelExpense"> | string | null
    liters?: FloatFilter<"FuelExpense"> | number
    cost?: FloatFilter<"FuelExpense"> | number
    date?: DateTimeFilter<"FuelExpense"> | Date | string
    createdAt?: DateTimeFilter<"FuelExpense"> | Date | string
    updatedAt?: DateTimeFilter<"FuelExpense"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutVehicleInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutVehicleInput, DocumentUncheckedUpdateWithoutVehicleInput>
    create: XOR<DocumentCreateWithoutVehicleInput, DocumentUncheckedCreateWithoutVehicleInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutVehicleInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutVehicleInput, DocumentUncheckedUpdateWithoutVehicleInput>
  }

  export type DocumentUpdateManyWithWhereWithoutVehicleInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutVehicleInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    expiryDate?: DateTimeFilter<"Document"> | Date | string
    driverId?: StringNullableFilter<"Document"> | string | null
    vehicleId?: StringNullableFilter<"Document"> | string | null
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type TripCreateWithoutDriverInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDriverInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    vehicleId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDriverInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripCreateManyDriverInputEnvelope = {
    data: TripCreateManyDriverInput | TripCreateManyDriverInput[]
  }

  export type DocumentCreateWithoutDriverInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutDriverInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    vehicleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput>
  }

  export type DocumentCreateManyDriverInputEnvelope = {
    data: DocumentCreateManyDriverInput | DocumentCreateManyDriverInput[]
  }

  export type AttendanceCreateWithoutDriverInput = {
    id?: string
    date?: Date | string
    status?: string
    hoursWorked?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateWithoutDriverInput = {
    id?: string
    date?: Date | string
    status?: string
    hoursWorked?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutDriverInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutDriverInput, AttendanceUncheckedCreateWithoutDriverInput>
  }

  export type AttendanceCreateManyDriverInputEnvelope = {
    data: AttendanceCreateManyDriverInput | AttendanceCreateManyDriverInput[]
  }

  export type FineCreateWithoutDriverInput = {
    id?: string
    reason: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineUncheckedCreateWithoutDriverInput = {
    id?: string
    reason: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineCreateOrConnectWithoutDriverInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutDriverInput, FineUncheckedCreateWithoutDriverInput>
  }

  export type FineCreateManyDriverInputEnvelope = {
    data: FineCreateManyDriverInput | FineCreateManyDriverInput[]
  }

  export type TripUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
  }

  export type TripUpdateManyWithWhereWithoutDriverInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDriverInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutDriverInput, DocumentUncheckedUpdateWithoutDriverInput>
    create: XOR<DocumentCreateWithoutDriverInput, DocumentUncheckedCreateWithoutDriverInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutDriverInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutDriverInput, DocumentUncheckedUpdateWithoutDriverInput>
  }

  export type DocumentUpdateManyWithWhereWithoutDriverInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutDriverInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutDriverInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutDriverInput, AttendanceUncheckedUpdateWithoutDriverInput>
    create: XOR<AttendanceCreateWithoutDriverInput, AttendanceUncheckedCreateWithoutDriverInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutDriverInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutDriverInput, AttendanceUncheckedUpdateWithoutDriverInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutDriverInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutDriverInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    driverId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    hoursWorked?: FloatFilter<"Attendance"> | number
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type FineUpsertWithWhereUniqueWithoutDriverInput = {
    where: FineWhereUniqueInput
    update: XOR<FineUpdateWithoutDriverInput, FineUncheckedUpdateWithoutDriverInput>
    create: XOR<FineCreateWithoutDriverInput, FineUncheckedCreateWithoutDriverInput>
  }

  export type FineUpdateWithWhereUniqueWithoutDriverInput = {
    where: FineWhereUniqueInput
    data: XOR<FineUpdateWithoutDriverInput, FineUncheckedUpdateWithoutDriverInput>
  }

  export type FineUpdateManyWithWhereWithoutDriverInput = {
    where: FineScalarWhereInput
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyWithoutDriverInput>
  }

  export type FineScalarWhereInput = {
    AND?: FineScalarWhereInput | FineScalarWhereInput[]
    OR?: FineScalarWhereInput[]
    NOT?: FineScalarWhereInput | FineScalarWhereInput[]
    id?: StringFilter<"Fine"> | string
    driverId?: StringFilter<"Fine"> | string
    reason?: StringFilter<"Fine"> | string
    amount?: FloatFilter<"Fine"> | number
    date?: DateTimeFilter<"Fine"> | Date | string
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
  }

  export type VehicleCreateWithoutTripsInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutVehicleInput
    documents?: DocumentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutTripsInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutVehicleInput
    documents?: DocumentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutTripsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
  }

  export type DriverCreateWithoutTripsInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutDriverInput
    attendances?: AttendanceCreateNestedManyWithoutDriverInput
    fines?: FineCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutTripsInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDriverInput
    fines?: FineUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutTripsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
  }

  export type FuelExpenseCreateWithoutTripInput = {
    id?: string
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutFuelExpensesInput
  }

  export type FuelExpenseUncheckedCreateWithoutTripInput = {
    id?: string
    vehicleId: string
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelExpenseCreateOrConnectWithoutTripInput = {
    where: FuelExpenseWhereUniqueInput
    create: XOR<FuelExpenseCreateWithoutTripInput, FuelExpenseUncheckedCreateWithoutTripInput>
  }

  export type FuelExpenseCreateManyTripInputEnvelope = {
    data: FuelExpenseCreateManyTripInput | FuelExpenseCreateManyTripInput[]
  }

  export type VehicleUpsertWithoutTripsInput = {
    update: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTripsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type VehicleUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DriverUpsertWithoutTripsInput = {
    update: XOR<DriverUpdateWithoutTripsInput, DriverUncheckedUpdateWithoutTripsInput>
    create: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutTripsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutTripsInput, DriverUncheckedUpdateWithoutTripsInput>
  }

  export type DriverUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUpdateManyWithoutDriverNestedInput
    fines?: FineUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutDriverNestedInput
    fines?: FineUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type FuelExpenseUpsertWithWhereUniqueWithoutTripInput = {
    where: FuelExpenseWhereUniqueInput
    update: XOR<FuelExpenseUpdateWithoutTripInput, FuelExpenseUncheckedUpdateWithoutTripInput>
    create: XOR<FuelExpenseCreateWithoutTripInput, FuelExpenseUncheckedCreateWithoutTripInput>
  }

  export type FuelExpenseUpdateWithWhereUniqueWithoutTripInput = {
    where: FuelExpenseWhereUniqueInput
    data: XOR<FuelExpenseUpdateWithoutTripInput, FuelExpenseUncheckedUpdateWithoutTripInput>
  }

  export type FuelExpenseUpdateManyWithWhereWithoutTripInput = {
    where: FuelExpenseScalarWhereInput
    data: XOR<FuelExpenseUpdateManyMutationInput, FuelExpenseUncheckedUpdateManyWithoutTripInput>
  }

  export type VehicleCreateWithoutMaintenanceLogsInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutVehicleInput
    documents?: DocumentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceLogsInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutVehicleInput
    documents?: DocumentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
  }

  export type VehicleUpsertWithoutMaintenanceLogsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceLogsInput, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
    create: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceLogsInput, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type VehicleUpdateWithoutMaintenanceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutFuelExpensesInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    documents?: DocumentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutFuelExpensesInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    documents?: DocumentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutFuelExpensesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutFuelExpensesInput, VehicleUncheckedCreateWithoutFuelExpensesInput>
  }

  export type TripCreateWithoutFuelExpensesInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: DriverCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutFuelExpensesInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    vehicleId: string
    driverId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCreateOrConnectWithoutFuelExpensesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutFuelExpensesInput, TripUncheckedCreateWithoutFuelExpensesInput>
  }

  export type VehicleUpsertWithoutFuelExpensesInput = {
    update: XOR<VehicleUpdateWithoutFuelExpensesInput, VehicleUncheckedUpdateWithoutFuelExpensesInput>
    create: XOR<VehicleCreateWithoutFuelExpensesInput, VehicleUncheckedCreateWithoutFuelExpensesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutFuelExpensesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutFuelExpensesInput, VehicleUncheckedUpdateWithoutFuelExpensesInput>
  }

  export type VehicleUpdateWithoutFuelExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutFuelExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type TripUpsertWithoutFuelExpensesInput = {
    update: XOR<TripUpdateWithoutFuelExpensesInput, TripUncheckedUpdateWithoutFuelExpensesInput>
    create: XOR<TripCreateWithoutFuelExpensesInput, TripUncheckedCreateWithoutFuelExpensesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutFuelExpensesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutFuelExpensesInput, TripUncheckedUpdateWithoutFuelExpensesInput>
  }

  export type TripUpdateWithoutFuelExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutFuelExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateWithoutDocumentsInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutDriverInput
    attendances?: AttendanceCreateNestedManyWithoutDriverInput
    fines?: FineCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDriverInput
    fines?: FineUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutDocumentsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
  }

  export type VehicleCreateWithoutDocumentsInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDocumentsInput = {
    id?: string
    regNumber: string
    name: string
    model: string
    type: string
    maxLoadCapacity: number
    odometer: number
    acquisitionCost: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    fuelExpenses?: FuelExpenseUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDocumentsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
  }

  export type DriverUpsertWithoutDocumentsInput = {
    update: XOR<DriverUpdateWithoutDocumentsInput, DriverUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutDocumentsInput, DriverUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUpdateManyWithoutDriverNestedInput
    fines?: FineUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutDriverNestedInput
    fines?: FineUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type VehicleUpsertWithoutDocumentsInput = {
    update: XOR<VehicleUpdateWithoutDocumentsInput, VehicleUncheckedUpdateWithoutDocumentsInput>
    create: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDocumentsInput, VehicleUncheckedUpdateWithoutDocumentsInput>
  }

  export type VehicleUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    regNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    maxLoadCapacity?: FloatFieldUpdateOperationsInput | number
    odometer?: FloatFieldUpdateOperationsInput | number
    acquisitionCost?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DriverCreateWithoutAttendancesInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    fines?: FineCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutAttendancesInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    fines?: FineUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutAttendancesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutAttendancesInput, DriverUncheckedCreateWithoutAttendancesInput>
  }

  export type DriverUpsertWithoutAttendancesInput = {
    update: XOR<DriverUpdateWithoutAttendancesInput, DriverUncheckedUpdateWithoutAttendancesInput>
    create: XOR<DriverCreateWithoutAttendancesInput, DriverUncheckedCreateWithoutAttendancesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutAttendancesInput, DriverUncheckedUpdateWithoutAttendancesInput>
  }

  export type DriverUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    fines?: FineUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    fines?: FineUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateWithoutFinesInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutDriverInput
    documents?: DocumentCreateNestedManyWithoutDriverInput
    attendances?: AttendanceCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutFinesInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory: string
    licenseExpiryDate: Date | string
    contactNumber: string
    safetyScore?: number
    status?: string
    salary?: number
    joinDate?: Date | string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
    documents?: DocumentUncheckedCreateNestedManyWithoutDriverInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutFinesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutFinesInput, DriverUncheckedCreateWithoutFinesInput>
  }

  export type DriverUpsertWithoutFinesInput = {
    update: XOR<DriverUpdateWithoutFinesInput, DriverUncheckedUpdateWithoutFinesInput>
    create: XOR<DriverCreateWithoutFinesInput, DriverUncheckedCreateWithoutFinesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutFinesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutFinesInput, DriverUncheckedUpdateWithoutFinesInput>
  }

  export type DriverUpdateWithoutFinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutDriverNestedInput
    documents?: DocumentUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutFinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: StringFieldUpdateOperationsInput | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    safetyScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutDriverNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type TripCreateManyVehicleInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    driverId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogCreateManyVehicleInput = {
    id?: string
    type: string
    cost: number
    date?: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelExpenseCreateManyVehicleInput = {
    id?: string
    tripId?: string | null
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyVehicleInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    driverId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneWithoutFuelExpensesNestedInput
  }

  export type FuelExpenseUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyDriverInput = {
    id?: string
    source: string
    destination: string
    cargoWeight: number
    distance: number
    status?: string
    vehicleId: string
    startTime?: Date | string | null
    endTime?: Date | string | null
    fuelConsumed?: number | null
    startOdometer?: number | null
    endOdometer?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyDriverInput = {
    id?: string
    type: string
    name: string
    expiryDate: Date | string
    vehicleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateManyDriverInput = {
    id?: string
    date?: Date | string
    status?: string
    hoursWorked?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FineCreateManyDriverInput = {
    id?: string
    reason: string
    amount: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    fuelExpenses?: FuelExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelExpenses?: FuelExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeight?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelConsumed?: NullableFloatFieldUpdateOperationsInput | number | null
    startOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    endOdometer?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseCreateManyTripInput = {
    id?: string
    vehicleId: string
    liters: number
    cost: number
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelExpenseUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutFuelExpensesNestedInput
  }

  export type FuelExpenseUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelExpenseUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DriverCountOutputTypeDefaultArgs instead
     */
    export type DriverCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DriverCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripCountOutputTypeDefaultArgs instead
     */
    export type TripCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DriverDefaultArgs instead
     */
    export type DriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DriverDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TripDefaultArgs instead
     */
    export type TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TripDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenanceLogDefaultArgs instead
     */
    export type MaintenanceLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenanceLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FuelExpenseDefaultArgs instead
     */
    export type FuelExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FuelExpenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentDefaultArgs instead
     */
    export type DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FineDefaultArgs instead
     */
    export type FineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FineDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}