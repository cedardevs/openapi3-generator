# {{openapi.info.title}}

{{{openapi.info.descriptionAsHTML}}}

## Table of Contents

{{#if openapi.info.termsOfService}}
* [Terms of Service](#termsOfService)
{{/if}}
{{#if openapi.servers}}
* [Servers](#servers)
{{/if}}
{{#if openapi.paths}}
* Paths
{{#each openapi.paths as |path pathName|}}
{{#each path as |op opName|}}
{{#validMethod opName}}
  - [`{{uppercase opName}}` {{pathName}}](#{{op.slug}}) {{#if op.deprecated}}_(deprecated)_{{/if}}
{{/validMethod}}
{{/each}}
{{/each}}
{{/if}}

{{> info}}

{{> servers}}

{{> security}}

{{> paths }}

{{> schemas }}
