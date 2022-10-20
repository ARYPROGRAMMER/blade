import type { ComponentStory, Meta } from '@storybook/react';
import { Title, Subtitle, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { Highlight, Link } from '@storybook/design-system';

import type { PasswordInputProps } from './PasswordInput';
import { PasswordInput } from './PasswordInput';
import useMakeFigmaURL from '~src/_helpers/storybook/useMakeFigmaURL';

const Page = (): ReactElement => {
  const figmaURL = useMakeFigmaURL([
    {
      themeTokenName: 'paymentTheme',
      lightModeURL:
        'https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade---Payment-Light?node-id=10953%3A110176',
      darkModeURL:
        'https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade---Payment-Light?node-id=10953%3A110176',
    },
    {
      themeTokenName: 'bankingTheme',
      lightModeURL:
        'https://www.figma.com/file/sAdplk2uYnI2ILnDKUxycW/Blade---Banking-Dark?node-id=9995%3A180296',
      darkModeURL:
        'https://www.figma.com/file/sAdplk2uYnI2ILnDKUxycW/Blade---Banking-Dark?node-id=9995%3A180296',
    },
  ]);

  return (
    <>
      <Title />
      <Subtitle>
        PasswordInput is an input field for entering passwords. The input is masked by default. On
        mobile devices the last typed letter is shown for a brief moment. The masking can be toggled
        using an optional reveal button.
      </Subtitle>
      <Title>Usage</Title>
      <Link withArrow={true} href={figmaURL} target="_blank" rel="noreferrer noopener">
        View in Figma
      </Link>
      <Highlight language="tsx">{`import { PasswordInput } from '@razorpay/blade/components' \nimport type { PasswordInputProps } from '@razorpay/blade/components'`}</Highlight>
      <Title>Example</Title>
      <Subtitle>You can change the properties using the controls in the table below.</Subtitle>
      <Primary />
      <Title>Properties</Title>
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

const propsCategory = {
  BASE_PROPS: 'Password Input Props',
  LABEL_PROPS: 'Label Props',
  VALIDATION_PROPS: 'Validation Props',
};

const meta: Meta<PasswordInputProps> = {
  title: 'Components/Input/PasswordInput',
  component: PasswordInput,
  args: {
    label: 'Enter password',
    name: 'password',
    helpText: 'We recommend having at least 8 characters in your password',
    placeholder: 'Enter a strong password',
  },
  argTypes: {
    autoFocus: { table: { category: propsCategory.BASE_PROPS } },
    label: { table: { category: propsCategory.LABEL_PROPS } },
    labelPosition: { table: { category: propsCategory.LABEL_PROPS } },
    name: { table: { category: propsCategory.BASE_PROPS } },
    placeholder: { table: { category: propsCategory.BASE_PROPS } },
    maxCharacters: { table: { category: propsCategory.BASE_PROPS } },
    isDisabled: { table: { category: propsCategory.BASE_PROPS } },
    isRequired: { table: { category: propsCategory.BASE_PROPS } },
    necessityIndicator: { table: { category: propsCategory.BASE_PROPS } },
    defaultValue: { table: { category: propsCategory.BASE_PROPS } },
    showRevealButton: { table: { category: propsCategory.BASE_PROPS } },
    validationState: { table: { category: propsCategory.VALIDATION_PROPS } },
    helpText: { table: { category: propsCategory.VALIDATION_PROPS } },
    successText: { table: { category: propsCategory.VALIDATION_PROPS } },
    errorText: { table: { category: propsCategory.VALIDATION_PROPS } },
    value: { table: { category: propsCategory.BASE_PROPS } },
    keyboardReturnKeyType: { table: { category: propsCategory.BASE_PROPS } },
    autoCompleteSuggestionType: { table: { category: propsCategory.BASE_PROPS } },
    onChange: { action: 'Changed', table: { category: propsCategory.BASE_PROPS } },
    onFocus: { action: 'Focussed', table: { category: propsCategory.BASE_PROPS } },
    onBlur: { action: 'Blurred', table: { category: propsCategory.BASE_PROPS } },
  },
  parameters: {
    docs: {
      page: Page,
    },
  },
};

const PasswordInputTemplate: ComponentStory<typeof PasswordInput> = ({ ...args }) => {
  return <PasswordInput {...args} />;
};

export const Default = PasswordInputTemplate.bind({});

export const AutoComplete = PasswordInputTemplate.bind({});
AutoComplete.args = {
  autoCompleteSuggestionType: 'newPassword',
};
AutoComplete.parameters = {
  docs: {
    description: {
      story:
        '`autoCompleteSuggestionType` can be used to tell the platform if the input field is being used for inputting new password or current password. This provides hints to browser autofill and password managers. **Note:** there is a [known issue](https://github.com/facebook/react-native/issues/21911) for iOS.',
    },
  },
};

export const MaxCharacters = PasswordInputTemplate.bind({});
MaxCharacters.args = {
  maxCharacters: 16,
};
MaxCharacters.parameters = {
  docs: {
    description: {
      story:
        '`maxCharacters` can be used to restrict the maximum permissible characters and show a character counter',
    },
  },
};

export const ErrorState = PasswordInputTemplate.bind({});
ErrorState.args = {
  validationState: 'error',
  errorText: 'Error',
};
ErrorState.parameters = {
  docs: {
    description: {
      story:
        '`validationState` can be used to set an `error` state and an approriate hint can be passed with `errorText`',
    },
  },
};

export const SuccessState = PasswordInputTemplate.bind({});
SuccessState.args = {
  validationState: 'success',
  successText: 'Success',
};
SuccessState.parameters = {
  docs: {
    description: {
      story:
        '`validationState` can be used to set a `success` state and an approriate hint can be passed with `successText`',
    },
  },
};

export const LabelAtLeft = PasswordInputTemplate.bind({});
LabelAtLeft.args = {
  labelPosition: 'left',
};
LabelAtLeft.parameters = {
  docs: {
    description: {
      story: '`labelPosition` can be used to adjust the positioning of input label',
    },
  },
};

export const Disabled = PasswordInputTemplate.bind({});
Disabled.args = {
  isDisabled: true,
  defaultValue: 'My_Strong#Password!',
};
Disabled.parameters = {
  docs: {
    description: {
      story:
        '`isDisabled` can be used to make the password input field read only (disabled for user input), `defaultValue` can be used to pass an initial value',
    },
  },
};

export const Required = PasswordInputTemplate.bind({});
Required.args = {
  isRequired: true,
  necessityIndicator: 'required',
};
Required.parameters = {
  docs: {
    description: {
      story:
        '`isRequired` can be used to make the password input field required for form submission, `necessityIndicator` can be used to show a visual cue by passing `required` as value',
    },
  },
};

export const ControlledInput = (): ReactElement => {
  const [state, setState] = useState<string | undefined>('');
  return (
    <PasswordInput
      label="Controlled PasswordInput"
      helpText="See the console for output"
      value={state}
      onChange={({ value }) => {
        console.log('Controlled Input Value:', value);
        setState(value);
      }}
    />
  );
};
ControlledInput.parameters = {
  docs: {
    description: {
      story: '`value` and `onChange` can be used to make the input field controlled',
    },
  },
};

export default meta;