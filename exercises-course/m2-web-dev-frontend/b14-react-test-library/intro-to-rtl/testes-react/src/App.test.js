// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
describe('Verificando se o botão e o campo email estão funcionando.', () => {
  it('Verifica se o titulo "Valor: " esta sempre renderizado', () => {
    render(<App />);
    const textEmail = screen.getByRole('heading', { name: /valor:/i, level: 2 });
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  })

  it('Verifica se o valor do campo Email eh apagado apos o click do botao Enviar e se o email digitado eh renderizado na tela ao lado de Valor:', async () => {
    render(<App />);
    const EMAIL_USER = 'email@email.com';

    const btnSend = screen.getByRole('button', { name: /enviar/i });
    const inputEmail = screen.getByRole('textbox', { name: /email/i});
    const textEmail = screen.getByRole('heading', { name: /valor:/i, level: 2 });
    
    // fireEvent.change(inputEmail, {
    //   target: { value: EMAIL_USER },
    // });
    // fireEvent.click(btnSend);

    await userEvent.type(inputEmail, EMAIL_USER);
    await userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  })  
});
