import { Space, Input } from 'antd';
import data from './temporary/tests.json'
import Test from './Components/Test';
import { observer } from 'mobx-react-lite'
import  apiStore  from './Stores/APIStore'

const PanelLayout = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    apiStore.handleChange(e.target.value);
  }

  return (
    <div className='layout-container'>
      <Space 
        direction='vertical'
        size='large'
      >
        <h1>Seamles Wallet Test Ekranı</h1>
        <Input
          placeholder="API url"
          size='large'
          value={apiStore.APIUrl}
          onChange={handleChange}
        />
        {data.tests.map((test) => (
          <Test key={test.ScenarioId} test={test}/>
        ))}
      </Space>
    </div>
  )
}

export default observer(PanelLayout);