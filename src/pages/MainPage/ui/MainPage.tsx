import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Select
                label="label"
                options={[
                    {
                        value: Currency.RUB,
                        option: Currency.RUB,
                    },
                    {
                        value: Currency.EUR,
                        option: Currency.EUR,
                    },
                    {
                        value: Currency.USD,
                        option: Currency.USD,
                    },
                ]}
            />
        </div>
    );
};

export default MainPage;
