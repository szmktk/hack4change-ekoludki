import { StyledForm, StyledInput, StyledSelect } from './Main.styled';

const { Option } = StyledSelect;

export const Main: React.FC = () => {
  const [form] = StyledForm.useForm();

  return (
    <StyledForm
      form={form}
      layout="vertical"
    >
      <StyledForm.Item label="Skad jedziesz?"> 
        <StyledInput placeholder="ulica bez numeru" />
        <StyledInput placeholder="dzielnica" />
      </StyledForm.Item>
      <StyledForm.Item label="Dokad?">
        <StyledInput placeholder="ulica bez numeru" />
        <StyledInput placeholder="dzielnica" />
      </StyledForm.Item>
      <StyledForm.Item label="O ktorej?">
        <StyledInput placeholder="godina" />
        <StyledForm.Item>
            <StyledSelect placeholder="o ktorej?" allowClear>
                <Option value="xD">na miejscu</Option>
                <Option value="XDD">wyjazd</Option>
            </StyledSelect>
        </StyledForm.Item>
      </StyledForm.Item>
    </StyledForm>
  );
};