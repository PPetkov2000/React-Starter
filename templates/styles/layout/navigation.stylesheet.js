module.exports = `.navbar {
  background-color: $primary-color;
  display: flex;
  align-items: center;
  height: 3.5rem;
  border-bottom: 2px solid #fff;

  &-brand {
    &-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      padding-left: 1rem;
    }

    &-icon {
      margin-right: 0.7rem;
      font-size: 1.2rem;
    }
  }
}
`