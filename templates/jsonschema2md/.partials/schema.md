# {{schema.title}} Schema

{{#if schema.description}}
{{{schema.description}}}
{{/if}}

{{#if schema.externalDocs}}
[{{schema.externalDocs.description}}]({{schema.externalDocs.url}})
{{else}}

| Name | Type | Accepted Values | Default |
|------|------|--------|---------|
{{#each schema.properties ~}}
{{> schemaProp prop=. propName=@key required=(isRequired ../schema @key) path='' ~}}
{{/each ~}}

{{#each schema.properties }}

{{> schemaPropExpanded prop=. propName=@key required=(isRequired ../schema @key) defaultDefined=(isDefined ./default) path='' ~}}

{{/each }}
{{/if }}



{{#unless hideExamples}}
{{#if schema.example}}
##### Example

```json
{{{stringify schema.example}}}
```
{{else}}
{{#if schema.generatedExample}}
##### Example _(generated)_

```json
{{{stringify schema.generatedExample}}}
```
{{/if}}
{{/if}}
{{/unless}}
