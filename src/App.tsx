import ReactDOM from 'react-dom/client'
import '@/styles/global.scss'
import Select, { SelectData } from './components/atoms/select'
import Button from './components/atoms/button'
import Group from './components/atoms/group'
import Input from './components/atoms/input'
import Panel from './components/atoms/panel'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

const selectData: SelectData[] = [
  { label: 'Select one of options', value: '' },
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
]

root.render(
  <div>
    <Input
      label="Simple Input"
      required
      name="input1"
      defaultValue="Luciano Zangeronimo"
    />
    <Input
      label="Simple Input"
      required
      name="input2"
      placeholder="Enter your name"
    />

    <Select data={selectData} label="Select Label" required />
    <Group>
      <Button skin="primary">Primary</Button>
      <Button skin="secondary">Secondary</Button>
      <Button skin="success">Success</Button>
      <Button skin="info">Info</Button>
      <Button skin="warning">Warning</Button>
      <Button skin="danger">Danger</Button>
    </Group>
    <Group>
      <Button skin="primary" disabled>
        Primary
      </Button>
      <Button skin="secondary" disabled>
        Secondary
      </Button>
      <Button skin="success" disabled>
        Success
      </Button>
      <Button skin="info" disabled>
        Info
      </Button>
      <Button skin="warning" disabled>
        Warning
      </Button>
      <Button skin="danger" disabled>
        Danger
      </Button>
    </Group>
    <Group>
      <Button size="large">Large Button</Button>
      <Button size="normal">Normal Button</Button>
      <Button size="small">Small Button</Button>
      <Button size="mini">Mini Button</Button>
    </Group>
    <Group>
      <Button full>Full Button</Button>
    </Group>
    <p>&nbsp;</p>
    <Group>
      <Button outline skin="primary">
        Primary
      </Button>
      <Button outline skin="secondary">
        Secondary
      </Button>
      <Button outline skin="success">
        Success
      </Button>
      <Button outline skin="info">
        Info
      </Button>
      <Button outline skin="warning">
        Warning
      </Button>
      <Button outline skin="danger">
        Danger
      </Button>
    </Group>
    <Group>
      <Button outline skin="primary" disabled>
        Primary
      </Button>
      <Button outline skin="secondary" disabled>
        Secondary
      </Button>
      <Button outline skin="success" disabled>
        Success
      </Button>
      <Button outline skin="info" disabled>
        Info
      </Button>
      <Button outline skin="warning" disabled>
        Warning
      </Button>
      <Button outline skin="danger" disabled>
        Danger
      </Button>
    </Group>
    <Group>
      <Button outline size="large">
        Large Button
      </Button>
      <Button outline size="normal">
        Normal Button
      </Button>
      <Button outline size="small">
        Small Button
      </Button>
      <Button outline size="mini">
        Mini Button
      </Button>
    </Group>
    <Group>
      <Button outline full>
        Full Button
      </Button>
    </Group>
    <Group align="left">
      <Panel title="Panel's Title" footer="Panel's Footer">
        Content of Panel Secondary (Default)
        <br /> width title
        <br /> and footer
      </Panel>
      <Panel skin="primary" title="Panel's Title" footer="Panel's Footer">
        Content of Panel Primary
        <br /> width title
        <br /> and footer
      </Panel>
      <Panel skin="success" title="Panel's Title" footer="Panel's Footer">
        Content of Panel Success
        <br /> width title
        <br /> and footer
      </Panel>
      <Panel skin="info" title="Panel's Title" footer="Panel's Footer">
        Content of Panel Info
        <br /> width title
        <br /> and footer
      </Panel>
      <Panel skin="warning" title="Panel's Title" footer="Panel's Footer">
        Content of Panel Warning
        <br /> width title
        <br /> and footer
      </Panel>
      <Panel skin="danger" title="Panel's Title" footer="Panel's Footer">
        Content of Panel Danger
        <br /> width title
        <br /> and footer
      </Panel>
    </Group>
  </div>,
)
