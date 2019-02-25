#### Path parameters

{{#each pathParams as |pathParam|}}
{{#if pathParam.name}}
##### {{pathParam.name}}
{{/if}}

{{#if pathParam.description}}
{{{pathParam.description}}}
{{/if}}

{{> parameter param=pathParam paramName=pathParam.name hideTitle=true}}

{{/each}}
