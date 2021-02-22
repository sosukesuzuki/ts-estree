This documentat specifies the extensions to the core ESTree AST types to the TypeScript grammer.

<!-- Table of Contents -->

- [TODO](#TODO)
- [Expressions](#Expressions)

  - [TSAsExpression](#TSAsExpression)
  - [TSNonNullExpression](#TSNonNullExpression)

- [Type Annotations](<#Type Annotations>)

  - [TSTypeAnnotation](#TSTypeAnnotation)

- [Type Expressions](<#Type Expressions>)

  - [TSUndefinedKeyword](#TSUndefinedKeyword)
  - [TSBooleanKeyword](#TSBooleanKeyword)
  - [TSNumberKeyword](#TSNumberKeyword)
  - [TSStringKeyword](#TSStringKeyword)
  - [TSBigIntKeyword](#TSBigIntKeyword)
  - [TSSymbolKeyword](#TSSymbolKeyword)
  - [TSAnyKeyword](#TSAnyKeyword)
  - [TSNeverKeyword](#TSNeverKeyword)
  - [TSNullKeyword](#TSNullKeyword)
  - [TSObjectKeyword](#TSObjectKeyword)
  - [TSVoidKeyword](#TSVoidKeyword)
  - [TSIntrinsicKeyword](#TSIntrinsicKeyword)
  - [TSUnknownKeyword](#TSUnknownKeyword)
  - [TSThisType](#TSThisType)
  - [TSLiteralType](#TSLiteralType)
  - [TSArrayType](#TSArrayType)
  - [TSTupleType](#TSTupleType)
  - [TSConditionalType](#TSConditionalType)
  - [TSTypeReference](#TSTypeReference)
  - [TSQualifiedName](#TSQualifiedName)
  - [TSUnionType](#TSUnionType)
  - [TSIntersectionType](#TSIntersectionType)
  - [TSInferType](#TSInferType)
  - [TSTypeOperator](#TSTypeOperator)
  - [TSTypeQuery](#TSTypeQuery)
  - [TSMappedType](#TSMappedType)
  - [TSImportType](#TSImportType)
  - [TSTemplateLiteralType](#TSTemplateLiteralType)
  - [TSTypePredicate](#TSTypePredicate)
  - [TSRestType](#TSRestType)
  - [TSOptionalType](#TSOptionalType)

- [Type Parameters](<#Type Parameters>)

  - [TSTypeParameterInstantiation](#TSTypeParameterInstantiation)
  - [TSTypeParameterDeclaration](#TSTypeParameterDeclaration)
  - [TSTypeParameter](#TSTypeParameter)

## TODO

- [ ] TSAbstractClassProperty
- [ ] TSAbstractKeyword
- [ ] TSAbstractMethodDefinition
- [x] TSAnyKeyword
- [x] TSArrayType
- [x] TSAsExpression
- [ ] TSAsyncKeyword
- [x] TSBigIntKeyword
- [x] TSBooleanKeyword
- [ ] TSCallSignatureDeclaration
- [ ] TSClassImplements
- [x] TSConditionalType
- [ ] TSConstructorType,
- [ ] TSConstructSignatureDeclaration,
- [ ] TSDeclareFunction,
- [ ] TSDeclareKeyword,
- [ ] TSEmptyBodyFunctionExpression
- [ ] TSEnumDeclaration
- [ ] TSEnumMember
- [ ] TSExportAssignment
- [ ] TSExportKeyword
- [ ] TSExternalModuleReference
- [ ] TSFunctionType
- [ ] TSImportEqualsDeclaration
- [x] TSImportType
- [ ] TSIndexedAccessType
- [ ] TSIndexSignature
- [x] TSInferType
- [ ] TSInterfaceBody
- [ ] TSInterfaceDeclaration
- [ ] TSInterfaceHeritage
- [x] TSIntersectionType
- [x] TSLiteralType
- [x] TSMappedType
- [ ] TSMethodSignature
- [ ] TSModuleBlock
- [ ] TSModuleDeclaration
- [ ] TSNamedTupleMember
- [ ] TSNamespaceExportDeclaration
- [x] TSNeverKeyword
- [x] TSNonNullExpression
- [x] TSNullKeyword
- [x] TSNumberKeyword
- [x] TSObjectKeyword
- [x] TSOptionalType
- [ ] TSParameterProperty
- [ ] TSParenthesizedType
- [ ] TSPrivateKeyword
- [ ] TSPropertySignature
- [ ] TSProtectedKeyword
- [ ] TSPublicKeyword
- [x] TSQualifiedName
- [ ] TSReadonlyKeyword
- [x] TSRestType
- [ ] TSStaticKeyword
- [x] TSStringKeyword
- [x] TSSymbolKeyword
- [x] TSTemplateLiteralType
- [x] TSThisType
- [x] TSTupleType
- [ ] TSTypeAliasDeclaration
- [x] TSTypeAnnotation
- [ ] TSTypeAssertion
- [ ] TSTypeLiteral
- [x] TSTypeOperator
- [x] TSTypeParameter
- [x] TSTypeParameterDeclaration
- [x] TSTypeParameterInstantiation
- [x] TSTypePredicate
- [x] TSTypeQuery
- [x] TSTypeReference
- [x] TSUndefinedKeyword
- [x] TSUnionType
- [x] TSUnknownKeyword
- [x] TSVoidKeyword
- [x] TSIntrinsicKeyword

## Expressions

### TSAsExpression

```ts
interface TSAsExpression :< Expression {
  type: "TSAsExpression";
  expression: Expression;
  typeAnnotation: TypeExpression;
}
```

<details>
<div>

```ts
foo as Foo;
```

</div>
</details>

### TSNonNullExpression

```ts
interface TSNonNullExpression :< Expression {
  type: "TSNonNullExpression";
  expression: Expression;
}
```

<details>
<div>

```ts
foo!;
```

</div>
</details>

## Type Annotations

### TSTypeAnnotation

```ts
interface TSTypeAnnotation :< Node {
  type: "TSTypeAnnotation";
  typeAnnotation: TypeExpression;
}
```

<details>
<div>

```ts
// TODO: Add example
```

</div>

</details>

## Type Expressions

```ts
interface TypeExpression :< Node {}
```

Any expressions in type context.

### TSUndefinedKeyword

```ts
interface TSUndefinedKeyword :< TypeExpression {
  type: "TSUndefinedKeyword"
}
```

<details>
<div>

```ts
var foo: undefined;
```

</div>

</details>

### TSBooleanKeyword

```ts
interface TSBooleanKeyword :< TypeExpression {
  type: "TSBooleanKeyword";
}
```

<details>
<div>

```ts
var foo: boolean;
```

</div>

</details>

### TSNumberKeyword

```ts
interface TSNumberKeyword :< TypeExpression {
  type: "TSNumberKeyword";
}
```

<details>
<div>

```ts
var foo: number;
```

</div>

</details>

### TSStringKeyword

```ts
interface TSStringKeyword :< TypeExpression {
  type: "TSStringKeyword";
}
```

<details>
<div>

```ts
var foo: string;
```

</div>

</details>

### TSBigIntKeyword

```ts
interface TSBigIntKeyword :< TypeExpression {
  type: "TSBigIntKeyword";
}
```

<details>
<div>

```ts
var foo: bigint;
```

</div>
</details>

### TSSymbolKeyword

```ts
interface TSSymbolKeyword :< TypeExpression {
  type: "TSSymbolKeyword";
}
```

<details>
<div>

```ts
var foo: symbol;
```

</div>
</details>

### TSAnyKeyword

```ts
interface TSAnyKeyword :< TypeExpression {
  type: "TSAnyKeyword";
}
```

<details>
<div>

```ts
var foo: any;
```

</div>
</details>

### TSNeverKeyword

```ts
interface TSNeverKeyword :< TypeExpression {
  type: "TSNeverKeyword";
}
```

<details>
<div>

```ts
var foo: never;
```

</div>
</details>

### TSNullKeyword

```ts
interface TSNullKeyword :< TypeExpression {
  type: "TSNullKeyword";
}
```

<details>
<div>

```ts
var foo: null;
```

</div>
</details>

### TSObjectKeyword

```ts
interface TSObjectKeyword :< TypeExpression {
  type: "TSObjectKeyword";
}
```

<details>
<div>

```ts
var foo: object;
```

</div>
</details>

### TSVoidKeyword

```ts
interface TSVoidKeyword :< TypeExpression {
  type: "TSVoidKeyword";
}
```

<details>
<div>

```ts
var foo: void;
```

</div>
</details>

### TSIntrinsicKeyword

```ts
interface TSIntrinsicKeyword :< TypeExpression {
  type: "TSIntrinsicKeyword";
}
```

<details>
<div>

```ts
type Uppercase<S extends string> = intrinsic;
```

</div>
</details>

### TSUnknownKeyword

```ts
interface TSUnknownKeyword :< TypeExpression {
  type: "TSUnknownKeyword";
}
```

<details>
<div>

```ts
var foo: unknown;
```

</div>
</details>

### TSThisType

```ts
interface TSThisType :< TypeExpression {
  type: "TSThisType";
}
```

<details>
<div>

```ts
var foo: this;
```

</div>
</details>

### TSLiteralType

```ts
interface TSLiteralType :< TypeExpression {
  type: "TSLiteralType";
  literal: Literal;
}
```

<details>
<div>

```ts
var foo: "str";
var bar: 123;
```

</div>
</details>

### TSArrayType

```ts
interface TSArrayType :< TypeExpression {
  type: "TSArrayType";
  elementType: TypeExpression;
}
```

<details>
<div>

```ts
var foo: Type[];
```

</div>
</details>

### TSTupleType

```ts
interface TSTupleType :< TypeExpression {
  type: "TSTupleType";
  elementTypes: [ TypeExpression ];
}
```

<details>
<div>

```ts
var foo: [element1, element2];
```

</div>
</details>

### TSConditionalType

```ts
interface TSConditionalType :< TypeExpression {
  type "TSConditionalType";
  checkType: TypeExpression;
  extendsType: TypeExpression;
  trueType: TypeExpression;
  falseType: TypeExpression;
}
```

<details>
<div>

```ts
var foo: checkType extends extendsType ? trueType : falseType;
```

</div>
</details>

### TSTypeReference

```ts
interface TSTypeReference :< TypeExpression {
  type: "TSTypeReference";
  typeName: Identifier | TSQualifiedName;
  typeParameters: TSTypeParameterInstantiation;
}
```

<details>
<div>

```ts
let foo: Foo;
```

</div>
</details>

### TSQualifiedName

```ts
interface TSQualifiedName :< TypeExpression {
  type: "TSQualifiedName";
  left: Identifier | TSQualifiedName;
  right: Identifier;
}
```

<details>
<div>

```ts
let foo: Foo.Bar;
```

</div>
</details>

### TSUnionType

```ts
interface TSUnionType :< TypeExpression {
  type: "TSUnionType";
  types: [ TypeExpression ];
}
```

<details>
<div>

```ts
let foo: Foo | Bar;
```

</div>
</details>

### TSIntersectionType

```ts
interface TSIntersectionType :< TypeExpression {
  type: "TSIntersectionType";
  types: [ TypeExpression ];
}
```

<details>
<div>

```ts
let foo: Foo & Bar;
```

</div>
</details>

### TSInferType

```ts
interface TSInferType :< TypeExpression {
  type: "TSInferType";
  typeParameter: TSTypeParameter;
}
```

<details>
<div>

```ts
var foo: infer bar;
```

</div>
</details>

### TSTypeOperator

```ts
interface TSTypeOperator :< TypeExpression {
  type: "TSTypeOperator";
  operator: TypeOperator;
  typeAnnotation?: TypeExpression;
}
```

<details>
<div>

```ts
var foo: keyof bar;
```

</div>
</details>

#### TypeOperator

```ts
enum TypeOperator {
  'keyof' | 'unique' | 'readonly'
}
```

### TSTypeQuery

```ts
interface TSTypeQuery :< TypeExpression {
  type: "TSTypeQuery";
  exprName: Identifier | TSQualifiedName;
}
```

<details>
<div>

```ts
var foo: typeof bar;
```

</div>
</details>

### TSMappedType

```ts
interface TSMappedType :< TypeExpression {
  type: "TSMappedType";
  typeParameter: TSTypeParameter;
  readonly?: boolean | '-' | '+';
  optional?: boolean | '-' | '+';
  typeAnnotation?: TypeExpression;
  nameType: TypeExpression | null;
}
```

<details>
<div>

```ts
var map: { [P in string]:  };
```

```ts
var map: { [P in string]: number };
```

```ts
var map: { readonly [P in string]?: number };
```

```ts
var map: { +readonly [P in string]+?: number };
```

```ts
var map: { -readonly [P in string]-?: number };
```

```ts
var map: { [P in string as T]: number };
```

</div>
</details>

### TSImportType

```ts
interface TSImportType :< TypeExpression {
  type: "TSImportType";
  argument: TypeExpression;
  qualifier: Identifier | TSQualifiedName | null;
  typeParameters: TSTypeParameterInstantiation | null;
}
```

In typescript-eslint, TSImportType has `isTypeOf` property. Also there is `parameter` property instead of `argument`. But they will be removed at next majour. See <https://github.com/typescript-eslint/typescript-eslint/pull/3076>.

<details>
<div>

```ts
var foo: import("foo");
```

```ts
var foo: import("foo").Foo;
```

```ts
var foo: import("foo").Foo<T>;
```

</div>
</details>

### TSTemplateLiteralType

```ts
interface TSTemplateLiteralType :< TSTemplateLiteralType {
  type: "TSTemplateLiteralType";
  quasis: [ TemplateElement ];
  types: [ TypeExpression ];
}
```

A element of `types` must be assignable to `string` or `number` or `bigint` or `boolean` or `null` or `undefined`.

`TSTemplateLiteralType` is used by only typescript-eslint. Babel uses `TSLiteralType` and `TemplateLiteral`.

<details>
<div>

```ts
var foo: `${Foo}`;
```

```ts
var foo: `foo${Foo}foo${Foo}`;
```

</div>
</details>

### TSTypePredicate

```ts
interface TSTypePredicate :< TypeExpression {
  type: "TSTypePredicate";
  asserts: boolean;
  parameterName: Identifier | TSThisType;
  typeAnnotation: TSTypeAnnotation | null;
}
```

A type predicate is only allowed in return type position for functions and methods.

<details>
<div>

`asserts` is `false`:

```ts
function foo(bar: unknown): bar is string {
  return typeof bar === "string";
}
```

`asserts` is `true`:

```ts
function foo(bar: unknown): asserts bar is string {
  if (typeof bar !== "string") {
    throw new Error("");
  }
}
```

</div>
</details>

### TSRestType

```ts
interface TSRestType {
  type: "TSRestType";
  typeAnnotation: TypeExpression;
}
```

A rest type is only allowed in elementTypes of [TSTupleType](#TSTupleType).

<details>
<div>

```ts
var foo: [...Bar];
```

</div>
</details>

### TSOptionalType

```ts
interface TSOptionalType :< TypeExpression {
  type: "TSOptionalType";
  typeAnnotation: TypeExpression;
}
```

An optional type is only allowed in `elementTypes` of [TSTupleType](#TSTupleType). See <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#optional-elements-in-tuple-types>.

<details>
<div>

```ts
var foo: [string?, number?];
```

</div>
</details>

## Type Parameters

### TSTypeParameterInstantiation

```ts
interface TSTypeParameterInstantiation :< Node {
  type: "TSTypeParameterInstantiation";
  params: [ TypeExpression ];
}
```

<details>
<div>

```ts
foo<T>();
```

</div>
</details>

### TSTypeParameterDeclaration

```ts
interface TSTypeParameterDeclaration :< Node {
  type: "TSTypeParameterDeclaration";
  params: [ TSTypeParameter ];
}
```

<details>
<div>

```ts
function foo<T>() {}
```

</div>
</details>

### TSTypeParameter

```ts
interface TSTypeParameter :< Node {
  type: "TSTypeParameter";
  name: Identifier;
  constraint?: TypeExpression;
  default?: TypeExpressions;
}
```

`name` is `string` in Babel. See <https://github.com/babel/babel/issues/12825>.

<details>
<div>

```ts
function foo<T>() {}
```

```ts
function foo<T = any>() {}
```

```ts
function foo<T extends string>() {}
```

</div>
</details>
