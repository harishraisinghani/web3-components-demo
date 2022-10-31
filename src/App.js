import React, { useState } from "react";
import { HashRouter, Routes, Route, Link} from "react-router-dom";
import { Input, Menu } from 'antd';
import './App.css';
import { TokenBalances, ERC20Transfers, TokenHolders} from '@covalenthq/web3-components';

const { Search } = Input;

const FormControl = ({placeholder, onSearch}) => {
  return (
    <Search placeholder={placeholder} onSearch={onSearch}
      style={{
        width: 500,
      }}
    />
  )
}

const items = [
  {
    label: (
      <Link to="/Web3-Components-Demo">Token Balances</Link>
    ),
    key: 'tokenBalances',
  },
  {
    label: (
      <Link to="/Web3-Components-Demo/erc20Transfers">ERC20 Transfers</Link>
    ),
    key: 'erc20Transfers'
  },
  {
    label: (
      <Link to="/Web3-Components-Demo/tokenHolders">Token Holders</Link>
    ),
    key: 'tokenHolders'
  }
]

const SearchTokenBalances = () => {
  const [address, setAddress] = useState(null)
  const [chainId, setChainId] = useState(1)

  const onSearch = (value) => setAddress(value);
  
  return(
    <div className="App" style={{ width: "100vw", padding: "25px" }}>
      <FormControl placeholder="Enter an Ethereum wallet address or ENS" onSearch={onSearch} />
      <div>
        <br></br>
        <p><b>Provided Address:</b> {address}</p>
        <p><b>Chain Id:</b> {chainId}</p>
        <TokenBalances address={address} chainId={chainId} />
      </div>
    </div>
  )
}

const SearchTokenHolders = () => {
  const [tokenAddress, setTokenAddress] = useState(null)
  const [chainId, setChainId] = useState(1)

  const onSearch = (value) => setTokenAddress(value);
  
  return(
    <div className="App" style={{ width: "100vw", padding: "25px" }}>
      <FormControl placeholder="Enter an Ethereum token (ERC20 or NFT) contract address" onSearch={onSearch} />
      <div>
        <br></br>
        <p><b>Provided Address:</b> {tokenAddress}</p>
        <p><b>Chain Id:</b> {chainId}</p>
        <TokenHolders tokenAddress={tokenAddress} chainId={chainId} />
      </div>
    </div>
  )
}

const SearchERC20Transfers = () => {
  const [walletAddress, setWalletAddress] = useState(null)
  const [chainId, setChainId] = useState(1)

  const onSearch = (value) => setWalletAddress(value);
  
  return(
    <div className="App" style={{ width: "100vw", padding: "25px" }}>
      <FormControl placeholder="Enter an Ethereum wallet address or ENS" onSearch={onSearch} />
      <div>
        <br></br>
        <p><b>Provided Address:</b> {walletAddress}</p>
        <p><b>Chain Id:</b> {chainId}</p>
        <ERC20Transfers address={walletAddress} chainId={chainId} />
      </div>
    </div>
  )
}

function App() {
  const [current, setCurrent] = useState('tokenBalances')

  const onClick = (e) => {
    setCurrent(e.key)
  }
  
  return (
    <HashRouter>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Routes>
          <Route path="/Web3-Components-Demo" element={<SearchTokenBalances />} />
          <Route path="/Web3-Components-Demo/erc20Transfers" element={<SearchERC20Transfers />} />
          <Route path="/Web3-Components-Demo/tokenHolders" element={<SearchTokenHolders />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
