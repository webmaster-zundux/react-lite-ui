export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      buttonContainer: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: 20
      }
    };
  }
  render() {
    return (
      <div>
        { /* Preview Block-1 */ }
        <PreviewBlock header="Styled Buttons">
          <div style={this.style.buttonContainer}>
            <Button>Primary</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            <Button type="info">Info</Button>
            <Button type="dark">Dark</Button>
          </div>
        </PreviewBlock>
        { /* Preview Block-2 */ }
        <PreviewBlock header="Bordered Buttons">
          <div style={this.style.buttonContainer}>
            <Button bordered>Primary</Button>
            <Button type="secondary" bordered>Secondary</Button>
            <Button type="success" bordered>Success</Button>
          </div>
        </PreviewBlock>
        { /* Preview Block-3 */ }
        <PreviewBlock header="Borderless Buttons">
          <div style={this.style.buttonContainer}>
            <Button type="danger" borderless>Danger</Button>
            <Button type="warning" borderless>Warning</Button>
            <Button type="info" borderless>Info</Button>
          </div>
        </PreviewBlock>
        { /* Preview Block-4 */ }
        <PreviewBlock header="Flat Buttons">
          <div style={this.style.buttonContainer}>
            <Button type="success" flat>Success</Button>
            <Button type="danger" flat>Danger</Button>
            <Button type="warning" flat>Warning</Button>
          </div>
        </PreviewBlock>
        { /* Preview Block-5 */ }
        <PreviewBlock header="Sizable Buttons">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gridGap: 20,
              alignItems: "center"
            }}
          >
            <Button type="primary" size="small">
              Small
            </Button>
            <Button type="primary" size="medium">
              Medium
            </Button>
            <Button type="primary" size="large">
              Large
            </Button>
          </div>
        </PreviewBlock>
      </div>
    );
  }
}
`;
