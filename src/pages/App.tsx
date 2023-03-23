import React, { Suspense, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from 'components/analytics/GoogleAnalyticsReporter'
import Header from 'components/Header'
import Web3ReactManager from 'components/Web3ReactManager'
import DarkModeQueryParamReader from 'theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import Pool from './Pool'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import Stake from './Stake'
import Vault from "./Valut"
import Mint from './Mint'
import Modal from "../components/Modal"
import { Stack } from '@blockstack/ui'
import { TYPE } from 'theme'
import { Box } from 'react-feather'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  z-index: 1;
`

export default function App() {
    const [adStatus, setAdStatus] = useState(true);

    return (
        <Suspense fallback={null}>
            <Route component={GoogleAnalyticsReporter} />
            <Route component={DarkModeQueryParamReader} />
            <div className="flex flex-col items-start overflow-x-hidden w-full min-h-screen bg-gray-100 dark:bg-zinc-900">
                <Header />
                <div className='max-h-screen overflow-y-auto overflow-x-hidden w-full flex flex-col flex-grow'>
                    <BodyWrapper className="px-4 md:px-0">
                        <Web3ReactManager>
                            <Switch>
                                <Route exact strict path="/swap" component={Swap} />
                                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                                <Route exact strict path="/pool" component={Pool} />
                                <Route exact path="/add" component={AddLiquidity} />
                                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                                <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                                <Route exact path="/stake" component={Stake} />
                                <Route exact path="/vault" component={Vault} />
                                <Route exact path="/mint" component={Mint} />
                                <Route component={RedirectPathToSwapOnly} />
                            </Switch>
                        </Web3ReactManager>
                    </BodyWrapper>
                </div>
            </div>
            <Modal isOpen={adStatus} onDismiss={() => setAdStatus(false)} maxHeight={90}>
                <img src="./scaryswap.gif" width={"750px"} height={"500px"} />
            </Modal>
        </Suspense>
    )
}
