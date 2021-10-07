import './App.css'
import 'antd/dist/antd.css'
import { Table, Button, Typography } from 'antd'

// Table Component usage
// https://ant.design/components/table/

// Button Component usage
// https://ant.design/components/button/

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

function App() {
  const handleClick = () => {}

  return (
    <div className="App">
        <div className="App__container">
            <Typography.Title>Title</Typography.Title>
            <Table
                style={{marginBottom: '1em'}}
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
            <Button onClick={handleClick} type="primary">
                Click me
            </Button>
        </div>
    </div>
  );
}

export default App;
