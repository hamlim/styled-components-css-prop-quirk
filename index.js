function Comp() {
  const DynamicComponent = useDynamicComponent();

  return (
    <DynamicComponent
      css={`
        color: red;
      `}
    >
      Testing
    </DynamicComponent>
  );
}
