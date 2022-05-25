let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
let newText = text.replaceAll("$", " ");
console.log(newText);
document.write(newText)

//challenge2
var names = ['Thomas', 'Sarah', 'Eva', 'Tobias', 'Peter' ];
console.log (names.slice (2,3));