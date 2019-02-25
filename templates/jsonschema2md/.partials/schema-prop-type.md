{{prop.type ~}}
{{~#if prop.enum ~}}enum{{~/if ~}}
{{~#if prop.anyOf ~}}anyOf{{~/if ~}}
{{~#if prop.oneOf ~}}oneOf{{~/if ~}}
{{~#if prop.items.type ~}}({{prop.items.type}}){{~/if ~}}
