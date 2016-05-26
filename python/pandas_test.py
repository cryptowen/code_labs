#!/usr/bin/python
# -*- coding: UTF-8 -*-
'''
Author      : Hu Wenchao
Description :
'''

import pandas as pd
df = pd.read_csv('banklist.csv')

# 概览
print df.head()

# 选取某些列
print df[['Bank Name', 'City', 'ST']]

# 类似select操作，选出符合条件的行
# http://stackoverflow.com/questions/17071871/select-rows-from-a-dataframe-based-on-values-in-a-column-in-pandas
print df.loc[df['City'] == 'Chicago']   # 城市是Chicago
# print df[df['City']=='Chicago']

city_set = {'Honolulu', 'Chicago'}
print df.loc[df['City'].isin(city_set)]   # 城市在列表中


#
