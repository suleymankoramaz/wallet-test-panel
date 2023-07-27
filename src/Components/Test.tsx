import { Collapse, Button, Divider, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ScenarioType } from '../Stores/ScenarioStore';
import { observer } from 'mobx-react-lite';
import apiStore from '../Stores/APIStore';

const { Panel } = Collapse;

type Props = {
  test: ScenarioType;
};

const Test = (props: Props) => {
  console.log(apiStore.APIUrl);

  return (
    <Collapse
      bordered={true}
      className='collapse'
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? -180 : 0} className='collapse-icon' />
      )}
      expandIconPosition='end'
      size='large'

    >
      <Panel
        header={
          <div className='panel-header'>
            <div className='panel-header-title'>
              <h3>{props.test.Title}</h3>
              <p>{props.test.ShortDescription}</p>
            </div>
            <Button>Test Et</Button>
          </div>
        }
        className='panel-container'
        key='1'
      >
        <div className='panel'>
          <div className='panel-body-details'>{props.test.LongDescription}</div>

          <Row
            gutter={[8, 24]}
          >
            {props.test.ScenarioInputs.map((input: string) =>
              <Col span={12}>
                <div dangerouslySetInnerHTML={{ __html: input }}/>
              </Col>
            )}
          </Row>

          <div className='panel-body'>
            <div className='panel-body-top'>
              <div className='test-info'>
                {/* ... */}
              </div>
              <div>{/* ... */}</div>
            </div>
            <div className='panel-body-bottom'>
              <div className='request-container'>
                <div>Request:</div>
                <div>{/* ... */}</div>
              </div>
              <div className='response-container'>
                <div>Response:</div>
                <div>{/* ... */}</div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default observer(Test);
