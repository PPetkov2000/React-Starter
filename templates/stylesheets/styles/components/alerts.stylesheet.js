module.exports = `@import "./component-variants";

@each $variant, $color in $variants {
  .alert-#{$variant} {
    @include alert-variant($color);
  }
}
`