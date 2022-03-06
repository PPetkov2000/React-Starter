module.exports = `@import "./component-variants";

@each $variant, $color in $variants {
  .accordion-#{$variant} {
    @include accordion-variant($color);
  }
}

.accordion-body {
  padding: 0 1rem;
  background-color: #fff;
  color: #000;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
`