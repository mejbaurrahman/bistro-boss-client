import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover'
import orderCover from '../../../assets/shop/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


export default function Order() {
    const categories = ['salad', 'pizza', 'soup','dessert', 'drinks' ]
    const {category} = useParams();

    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
   
    const dessert = menu.filter(item=> item.category=='dessert')
    const pizza = menu.filter(item=> item.category=='pizza')
    const salad = menu.filter(item=> item.category=='salad')
    const drinks = menu.filter(item=> item.category=='drinks')
    const soup = menu.filter(item=> item.category=='soup')
    

  return (
    <div className='mb-10'>
       <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
        <Cover img={orderCover} title={'Order food'}></Cover>
        <Tabs className='w-5/6 mx-auto my-10' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERT</Tab>
            <Tab>DRINKS</Tab>
        </TabList>
        
        <TabPanel>
        <OrderTab item={salad}> </OrderTab>
        
        
        </TabPanel>
        <TabPanel>
        <OrderTab item={pizza}> </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={soup}> </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={dessert}> </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={drinks}> </OrderTab>
        </TabPanel>
        
        </Tabs>
    </div>
  )
}
