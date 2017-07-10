/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import PluginLeftMenu from 'components/PluginLeftMenu';
import InputNumber from 'components/InputNumber';
import selectHome from './selectors';
import styles from './styles.scss';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = ({ target }) => {
    console.log(target.value);
    this.setState({ value: target.value });
  }

  render() {

    const test = {
          "name": "bame",
          "slug": "name",
          "target": "general.name",
          "type": "text",
          "value": "ExperienceApp",
          "validations" : {
            "maxLength": 255,
            "required": true,
            "regex": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }
    };

    return (
      <div className={styles.home}>
        <div className={styles.baseline}></div>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Description of Home' },
          ]}
        />
        <div className="container-fluid">
          <div className="row">
            <PluginLeftMenu />
            <div className="col-md-9">
              <div className="form-group">

                <InputNumber
                  validations={test.validations}
                  name={test.name}
                  value={this.state.value}
                  handleChange={this.handleChange}
                  inputDescription="Change..."
                  handleBlur={this.handleBlur}

                  errors={[]}
                />
              <InputNumber
                  validations={test.validations}
                  name={test.name}
                  value={this.state.value}
                  handleChange={this.handleChange}
                  overrideBootstrapCol="4"
                  errors={false}
                />
              <InputNumber
                  validations={test.validations}
                  name={test.name}
                  value={this.state.value}
                  handleChange={this.handleChange}
                  overrideBootstrapCol="2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectHome();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
