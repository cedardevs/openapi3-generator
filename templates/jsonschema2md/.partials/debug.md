{{#each openapi}}
    Key: {{@key}} Value = {{this}}
{{/each}}
PROPS
{{#each openapi.properties ~}}

{{#each .}}
    Key: {{@key}} Value = {{this}}
{{/each}}

{{#if items}}

{{#each items.anyOf}}
    anyOf: {{@key}} Value = {{this}}
    {{#each .}}
        Key: {{@key}} Value = {{this}}
    {{/each}}

{{/each}}
{{#each items.oneOf}}
    oneOf: {{@key}} Value = {{this}}
    {{#each .}}
        Key: {{@key}} Value = {{this}}
        {{#if this.externalDocs}}
        {{this.title}}
        * [{{this.externalDocs.description}}]({{this.externalDocs.url}})
        {{/if}}
    {{/each}}
{{/each}}
{{#each items}}
    item: {{@key}} Value = {{this}}
{{/each}}
{{/if}}

{{/each ~}}
