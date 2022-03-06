module.exports = `@import "./component-variants";

@each $variant, $color in $variants {
  .badge-#{$variant} {
    @include badge-variant($color);
  }
}
`