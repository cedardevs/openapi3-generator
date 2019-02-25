{{#each path}}
{{#validMethod @key}}

{{#if ../deprecated}}
### _(DEPRECATED)_ ~~`{{uppercase @key}}` {{../../pathName}} {{headerId ../slug}}~~
{{else}}
### <span id="{{../slug}}" > `{{uppercase @key}}` {{../../pathName}} </span>
{{/if}}
{{> operation operation=.. operationName=(uppercase @key)}}
{{/validMethod}}
{{/each}}
