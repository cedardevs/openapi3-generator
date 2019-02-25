
{{#unless hideTitle}}
{{#if schema.title}}
#### {{schema.title}}
{{else}}
#### {{schemaName}}
{{/if}}
{{/unless}}

{{#if schema.externalDocs}}
[{{schema.externalDocs.description}}]({{schema.externalDocs.url}})
{{else}}
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
    {{#each schema.properties}}
      {{> schemaProp prop=. propName=@key required=(isRequired ../schema @key) path=''}}
    {{else}}
      {{> schemaProp prop=schema propName=schemaName required=(isRequired ../schema @key) path=''}}
    {{/each}}
  </tbody>
</table>
{{/if}}

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
