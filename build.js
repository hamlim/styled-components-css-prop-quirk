import _styled from "styled-components";

var _StyledDynamicComponent = _styled(DynamicComponent).withConfig({
  displayName: "styled-components-css-prop-quirk___StyledDynamicComponent",
  componentId: "sc-9nric5-0"
})(["color:red;"]);

function Comp() {
  const DynamicComponent = useDynamicComponent();
  return <_StyledDynamicComponent>
      Testing
    </_StyledDynamicComponent>;
}
