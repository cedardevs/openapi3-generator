openapi OBJECT:
{{#each openapi}}
    Key: {{@key}} Value = {{this}}
{{/each}}
{{~> schema}}

{{#each . as |schema schemaName| }}

  conext OBJECT:
  {{#each .}}
      Key: {{@key}} Value = {{this}}
  {{/each}}

  SCHEMA OBJECT:
  {{#each schema}}
      Key: {{@key}} Value = {{this}}
  {{/each}}

{{> schema}}


{{/each}}
