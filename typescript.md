This documentat specifies the extensions to the core ESTree AST types to the TypeScript grammer.

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
- [ ] TSImportType
- [ ] TSIndexedAccessType
- [ ] TSIndexSignature
- [x] TSInferType
- [ ] TSInterfaceBody
- [ ] TSInterfaceDeclaration
- [ ] TSInterfaceHeritage
- [x] TSIntersectionType
- [x] TSLiteralType
- [ ] TSMappedType
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
- [ ] TSOptionalType
- [ ] TSParameterProperty
- [ ] TSParenthesizedType
- [ ] TSPrivateKeyword
- [ ] TSPropertySignature
- [ ] TSProtectedKeyword
- [ ] TSPublicKeyword
- [x] TSQualifiedName
- [ ] TSReadonlyKeyword
- [ ] TSRestType
- [ ] TSStaticKeyword
- [x] TSStringKeyword
- [x] TSSymbolKeyword
- [ ] TSTemplateLiteralType
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
interface TSTypeQuery {
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

```ts
function foo(bar: unknown): bar is string {
  return typeof bar === "string";
}
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

`name` is `string` in Babel. See https://github.com/babel/babel/issues/12825.

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
