import { Fragment } from "react";
import CodeBlock from "../../../../pages/components/CodeBlock";
import Description from "../../../../pages/components/Description";
import Title from "../../../../pages/components/Title";
import { Alert } from "react-bootstrap";
import LibraryTitle from "../../../../pages/components/LibraryTitle";
import Example from "../../../../pages/components/Example";
import SupportVersion from "../../../../pages/components/SupportVersion";

export default function v2_LH() {
  return {
    "getting-started": {
      name: "Getting started",
      type: "sub_modules",
      list: {
        "about-as": {
          name: "About us",
          code: (
            <Fragment>
              <Title title={"About us"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <Description
                description={
                  "Library created to use helpers for strings and arrays."
                }
              />
            </Fragment>
          ),
        },
        install: {
          name: "Install",
          code: (
            <Fragment>
              <Title title={"Install"} />

              <Alert variant={"info"}>
                <strong>Note: </strong>Currently the library is compatible with
                development in Linux environments.
              </Alert>

              <SupportVersion title={"Lion-Helpers"} version={"8.1"} />

              <CodeBlock
                language={"bash"}
                content={"composer require lion/helpers"}
              />
            </Fragment>
          ),
        },
      },
    },
    arr: {
      name: "Arr::class",
      type: "sub_modules",
      list: {
        first: {
          name: "first",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"first"} />

              <Description
                description={
                  "The first function returns the first element of an array."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of([null, 23, 'Sergio'])->first();\n"
                }
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"get"} />

              <Description
                description={
                  "The get function is used to get the array obtained in the arr class."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of([1, 2, 3])->get();\n"
                }
              />
            </Fragment>
          ),
        },
        join: {
          name: "join",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"join"} />

              <Description
                description={
                  "The join function allows you to obtain a string joined with the values of the array by delimiters."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$join = Arr::of(['Sergio', 'Santiago', 'David'])->join(', ');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$join = Arr::of(['Sergio', 'Santiago', 'David'])->join(', ', ' and ');\n"
                }
              />
            </Fragment>
          ),
        },
        "key-by": {
          name: "keyBy",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"keyBy"} />

              <Description
                description={
                  "The keyBy function uses the value of a column of an array as the key of the same array."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$data = [
    [
        'name' => 'Sergio Leon', 
        'rol' => 'admin'
    ],
    [
        'name' => 'Santiago Ospina', 
        'rol' => 'admin'
    ],
    [
        'name' => 'David Giraldo', 
        'rol' => 'provider'
    ],
    [
        'name' => 'Alex Rojas', 
        'rol' => 'provider'
    ],
];

$arr = $Arr::of($data)->keyBy('name');
`}
              />
            </Fragment>
          ),
        },
        keys: {
          name: "keys",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"keys"} />

              <Description
                description={
                  "The keys function modifies the current array and creates a new one with its keys."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['name' => 'Sleon', 'age' => 23])->keys()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        last: {
          name: "last",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"last"} />

              <Description
                description={
                  "The last function returns the last element of an array."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of([null, 23, 'Sergio'])->last();\n"
                }
              />
            </Fragment>
          ),
        },
        length: {
          name: "length",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"length"} />

              <Description
                description={
                  "The length function allows you to get the size of an array."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of([1, 3, 5, 7])->length();\n"
                }
              />
            </Fragment>
          ),
        },
        of: {
          name: "of",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"of"} />

              <Description
                description={
                  "The of function allows initializing the array obtained in the arr class."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of([1, 2, 3]);\n"
                }
              />
            </Fragment>
          ),
        },
        prepend: {
          name: "prepend",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"prepend"} />

              <Description
                description={
                  "The prepend function adds a value to the start of an array."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$data = [1, 2, 3];\n\n" +
                  "$arr = Arr::of($data)->prepend(4);\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$data = [1, 2, 3];\n\n" +
                  "$arr = Arr::of($data)->prepend(4, 'id');\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$data = [
    [
        'name' => 'Sergio Leon', 
        'rol' => 'admin'
    ],
    [
        'name' => 'Santiago Ospina', 
        'rol' => 'admin'
    ],
    [
        'name' => 'David Giraldo', 
        'rol' => 'provider'
    ],
    [
        'name' => 'Alex Rojas', 
        'rol' => 'provider'
    ],
];

$arr = Arr::of($data)->prepend(['name' => 'Stiven', 'rol' => 'user']);
`}
              />
            </Fragment>
          ),
        },
        push: {
          name: "push",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"push"} />

              <Description
                description={
                  "The push function allows you to insert an element into an array."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$arr = Arr::of([1, 2, 3])->push(4)->get();
`}
              />

              <Example
                number={2}
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$arr = Arr::of([1, 2, 3])->push(4, 'key-name')->get();
`}
              />

              <Example
                number={3}
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$arr = Arr::of([1, 2, 3])->push(4, 'key-name')->get();
`}
              />

              <Example
                number={4}
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$arr = Arr::of([1, 2, 3])->push([4], 'key-name')->get();
`}
              />
            </Fragment>
          ),
        },
        random: {
          name: "random",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"random"} />

              <Description
                description={
                  "The random function selects a number of random elements from an array."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['Sergio', 'David', 'Santiago'])->random();\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['Sergio', 'David', 'Santiago'])->random(2);\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['Sergio', 'David', 'Santiago'])->random(2);\n"
                }
              />

              <Example
                number={4}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['Sergio', 'David', 'Santiago'])->random(5);\n"
                }
              />
            </Fragment>
          ),
        },
        tree: {
          name: "tree",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"tree"} />

              <Description
                description={
                  "The tree function uses the value of a column of an array as a key by creating a new array and adding all arrays that share the same column value."
                }
              />

              <CodeBlock
                language={"php"}
                content={`<?php

use LionHelpers\\Arr;

$data = [
    [
        'name' => 'Sergio Leon', 
        'rol' => 'admin'
    ],
    [
        'name' => 'Santiago Ospina', 
        'rol' => 'admin'
    ],
    [
        'name' => 'David Giraldo', 
        'rol' => 'provider'
    ],
    [
        'name' => 'Alex Rojas', 
        'rol' => 'provider'
    ],
];

$arr = Arr::of($data)->tree('rol');
`}
              />
            </Fragment>
          ),
        },
        sort: {
          name: "sort",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"sort"} />

              <Description
                description={
                  "The sort function sorts the elements in ascending order of the values (string and numeric) of an array."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "Arr::of(['Sergio', 'David', 'Santiago'])->sort();\n"
                }
              />
            </Fragment>
          ),
        },
        values: {
          name: "values",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"values"} />

              <Description
                description={
                  "The values function modifies the current array and creates a new one with its values."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['name' => 'Sleon', 'age' => 23])->values()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        where: {
          name: "where",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"where"} />

              <Description
                description={
                  "The where function gets a new array of elements based on its condition."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of([5, 44, 22])->where(fn($value, $key) => $value > 20);\n"
                }
              />
            </Fragment>
          ),
        },
        "where-not-null": {
          name: "whereNotNull",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"whereNotNull"} />

              <Description
                description={
                  "The whereNotNull function gets a new array of elements where the values are not null or empty."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::of(['', 23, 'Sergio', null, 'Santiago', 25])->whereNotNull();\n"
                }
              />
            </Fragment>
          ),
        },
        wrap: {
          name: "wrap",
          code: (
            <Fragment>
              <LibraryTitle className={"Arr"} methodName={"wrap"} />

              <Description
                description={
                  "The wrap function creates a new array with a value inside."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::wrap('Sergio');\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::wrap();\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Arr;\n\n" +
                  "$arr = Arr::wrap(null);\n"
                }
              />
            </Fragment>
          ),
        },
      },
    },
    str: {
      name: "Str::class",
      type: "sub_modules",
      list: {
        after: {
          name: "after",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"after"} />

              <Description
                description={
                  "The after function gets the string after the typed delimiter."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Hello world')->after(' ');\n"
                }
              />
            </Fragment>
          ),
        },
        before: {
          name: "before",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"before"} />

              <Description
                description={
                  "The before function gets the string that is before the typed delimiter."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Hello world')->before(' ');\n"
                }
              />
            </Fragment>
          ),
        },
        between: {
          name: "between",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"between"} />

              <Description
                description={
                  "The between function gets the string that is the first delimiter and the second."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world, this is an example')->between('world', 'an');\n"
                }
              />
            </Fragment>
          ),
        },
        camel: {
          name: "camel",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"camel"} />

              <Description
                description={
                  "The camel function forms the camelcase to the obtained string."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->camel()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        concat: {
          name: "concat",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"concat"} />

              <Description
                description={
                  "The concat function adds to the end of the obtained string the written string."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello')->concat(' world')->get();\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello')\n\t->concat(' world')\n\t->concant(', this is an example')\n\t->get();\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello')\n\t->concat(' world')\n\t->concant(', this is an example')\n\t->ln()\n\t->get();\n"
                }
              />
            </Fragment>
          ),
        },
        contains: {
          name: "contains",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"contains"} />

              <Description
                description={
                  "The contains function checks whether the obtained string contains a typed pattern."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->contains(['hello', 'world']);\n"
                }
              />
            </Fragment>
          ),
        },
        get: {
          name: "get",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"get"} />

              <Description
                description={"The get function gets the generated string."}
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Sergio')->get();\n"
                }
              />
            </Fragment>
          ),
        },
        headline: {
          name: "headline",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"headline"} />

              <Description
                description={
                  "The headline function formats a string with spaces and upper case."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->headline()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        kebab: {
          name: "kebab",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"kebab"} />

              <Description
                description={
                  "The kebab function forms the kebabcase to the obtained string."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->kebab()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        limit: {
          name: "limit",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"limit"} />

              <Description
                description={
                  "The limit function returns the number of characters in the string string."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello worl')->limit()->get();\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->limit(8)->get();\n"
                }
              />

              <Example
                number={3}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->limit(5)->get();\n"
                }
              />

              <Example
                number={4}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->limit(20)->get();\n"
                }
              />
            </Fragment>
          ),
        },
        length: {
          name: "length",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"length"} />

              <Description description={"Gets the length of a string."} />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$length = Str::of('hello world')->length();\n"
                }
              />
            </Fragment>
          ),
        },
        lower: {
          name: "lower",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"lower"} />

              <Description
                description={
                  "The lower function converts the obtained string to lowercase."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('HELLO WORLD')->lower()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        ln: {
          name: "ln",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"ln"} />

              <Description
                description={"The ln function adds line breaks to the string."}
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Hello world')->ln()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        lt: {
          name: "lt",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"lt"} />

              <Description
                description={"The lt function adds tabs to the string."}
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Hello world')->lt()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        mask: {
          name: "mask",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"mask"} />

              <Description
                description={
                  "The mask function converts to specific characters part of the obtained string in a range of characters."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('sleon@gmail.com')->mask('*', 7)->get();\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('sleon@gmail.com')->mask('*', -7)->get();\n"
                }
              />
            </Fragment>
          ),
        },
        of: {
          name: "of",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"of"} />

              <Description
                description={
                  "The of function allows initializing the string obtained in the str class."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Sergio');\n"
                }
              />
            </Fragment>
          ),
        },
        pascal: {
          name: "pascal",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"pascal"} />

              <Description
                description={
                  "The pascal function forms the pascalcase to the obtained string."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->pascal()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        prepend: {
          name: "prepend",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"prepend"} />

              <Description
                description={
                  "The prepend function adds the written value to the beginning of a string."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('world')->prepend('Hello ')->get();\n"
                }
              />
            </Fragment>
          ),
        },
        replace: {
          name: "replace",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"replace"} />

              <Description
                description={
                  "The replace function does a replace of a delimiter and it is replaced by its selected value."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('Hello, world')->replace(',', '')->get();\n"
                }
              />
            </Fragment>
          ),
        },
        snake: {
          name: "snake",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"snake"} />

              <Description
                description={
                  "The snake function forms the snakecase to the obtained string."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->snake()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        swap: {
          name: "swap",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"swap"} />

              <Description
                description={
                  "The swap function modifies the string by the defined values."
                }
              />
              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->swap([\n\t'hello' => 'Sergio',\n\t'world' => 'Leon'\n])->get();\n"
                }
              />
            </Fragment>
          ),
        },
        "to-null": {
          name: "toNull",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"toNull"} />

              <Description
                description={
                  "The toNull function converts empty strings to null."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('')->toNull();\n"
                }
              />
            </Fragment>
          ),
        },
        "to-string": {
          name: "toString",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"toString"} />

              <Description
                description={
                  "The toString function converts null values to empty strings."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of(null)->toString()->get();\n"
                }
              />
            </Fragment>
          ),
        },
        test: {
          name: "test",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"test"} />

              <Description
                description={
                  "The test function validates a regular expression with the returned string."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->test('/hello/i');\n"
                }
              />
            </Fragment>
          ),
        },
        trim: {
          name: "trim",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"trim"} />

              <Description
                description={
                  "The trim function removes the spaces at the beginning and end of the obtained string."
                }
              />

              <Example
                number={1}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('   hello world   ')->trim()->get();\n"
                }
              />

              <Example
                number={2}
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('   hello world   ')->trim('world')->get();\n"
                }
              />
            </Fragment>
          ),
        },
        upper: {
          name: "upper",
          code: (
            <Fragment>
              <LibraryTitle className={"Str"} methodName={"upper"} />

              <Description
                description={
                  "The upper function converts the obtained string to uppercase."
                }
              />

              <CodeBlock
                language={"php"}
                content={
                  "<?php\n\n" +
                  "use LionHelpers\\Str;\n\n" +
                  "$str = Str::of('hello world')->upper()->get();\n"
                }
              />
            </Fragment>
          ),
        },
      },
    },
  };
}
