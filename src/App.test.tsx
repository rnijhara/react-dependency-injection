import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {container} from "./ioc/ioc";
import {Provider} from "./ioc/ioc.react";
import {stubInterface} from "ts-sinon";
import {RiskService} from "./services/RiskService";
import sinon from 'sinon';

test('renders learn react link', async () => {
  const riskService = stubInterface<RiskService>();
  riskService.getRisks.resolves([{id: 1, title: 'Test Risk'}])
  sinon.stub(container, 'get')
    .withArgs('riskService')
    .returns(riskService)

  render(
    <Provider container={container}>
      <App/>
    </Provider>
  );

  await waitFor(() => {
    const linkElement = screen.getByText(/Test Risk/i);
    expect(linkElement).toBeInTheDocument();
  })
});
