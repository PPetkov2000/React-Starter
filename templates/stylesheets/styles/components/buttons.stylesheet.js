module.exports = `@import "./component-variants";

@each $variant, $color in $variants {
  .button-#{$variant} {
    @include button-variant($color);
  }
}
`