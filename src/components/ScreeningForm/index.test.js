import { renderComponent } from 'utils/testUtils';
import ScreeningForm from 'components/ScreeningForm';
import { MOCK_FORM } from 'staticData';

describe('ScreeningForm', () => {
  it('renders', () => {
    const props = {
      formData: MOCK_FORM.data.form,
      onError: jest.fn(),
      onSubmit: jest.fn(),
    };
    const form = renderComponent(ScreeningForm, props);
    expect(form.find('Connect(FormRenderer)')).toHaveLength(1);
  });
});
