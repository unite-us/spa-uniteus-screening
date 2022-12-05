import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormRenderer } from '@unite-us/client-utils';
import { Button } from '@unite-us/ui';
import { noop } from 'lodash';

class ScreeningForm extends Component {
  constructor(props) {
    super(props);
    this.formInstance = null;
    this.submit = this.submit.bind(this);

    this.state = {
      submitting: false,
    };
  }

  submit() {
    this.setState({ submitting: true });
    return this.formInstance.wrappedInstance.submit()
      .then((values) => {
        this.props.onSubmit(values);
        this.setState({ submitting: false });
        return values;
      })
      .catch((errors) => {
        this.props.onError(errors);
        this.setState({ submitting: false });
        return errors;
      });
  }

  render() {
    const {
      editMode,
      formData,
      getFormState,
      hideSubmitButton,
      submitting,
    } = this.props;

    return (
      <div className="screening-form">
        <FormRenderer
          ref={(c) => { this.formInstance = c; }}
          formData={formData}
          getFormState={getFormState}
          editMode={editMode}
        />
        {
          (!hideSubmitButton && editMode) &&
            <Button
              id="submit-btn"
              label="Submit"
              onClick={this.submit}
              primary
              disabled={this.state.submitting || submitting}
            />
        }
      </div>
    );
  }
}

ScreeningForm.propTypes = {
  formData: PropTypes.object.isRequired,
  getFormState: PropTypes.func,
  hideSubmitButton: PropTypes.bool,
  onError: PropTypes.func,
  onSubmit: PropTypes.func,
  editMode: PropTypes.bool,
  submitting: PropTypes.bool,
};

ScreeningForm.defaultProps = {
  getFormState: state => state.form,
  hideSubmitButton: false,
  onError: noop,
  onSubmit: noop,
  editMode: true,
  submitting: false,
};

export default ScreeningForm;
