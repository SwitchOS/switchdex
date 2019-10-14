import React from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { ERC20_APP_BASE_PATH } from '../../common/constants';
import { AdBlockDetector } from '../../components/common/adblock_detector';
import { GeneralLayoutContainer } from '../../components/general_layout';
import { getThemeByMarketplace } from '../../themes/theme_meta_data_utils';
import { MARKETPLACES } from '../../util/types';

import { ToolbarContentContainer } from './common/toolbar_content';
import { Marketplace } from './pages/marketplace';
import { MyWallet } from './pages/my_wallet';
import { TokensListPage } from './pages/tokens_list';

const toolbar = <ToolbarContentContainer />;

export const Erc20App = () => {
    const themeColor = getThemeByMarketplace(MARKETPLACES.ERC20);
    return (
        <ThemeProvider theme={themeColor}>
            <GeneralLayoutContainer toolbar={toolbar}>
                <AdBlockDetector />
                <Switch>
                    <Route exact={true} path={`${ERC20_APP_BASE_PATH}/`} component={Marketplace} />
                    <Route exact={true} path={`${ERC20_APP_BASE_PATH}/my-wallet`} component={MyWallet} />
                    <Route exact={true} path={`${ERC20_APP_BASE_PATH}/listed-tokens`} component={TokensListPage} />
                </Switch>
            </GeneralLayoutContainer>
        </ThemeProvider>
    );
};
