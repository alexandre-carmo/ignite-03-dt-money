import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} alt="" /> DT Money
        </div>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
