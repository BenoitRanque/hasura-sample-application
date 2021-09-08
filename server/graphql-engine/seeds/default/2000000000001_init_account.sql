SET LOCAL "hasura.user" = '{ "x-hasura-user-id": 0 }';

INSERT INTO public.title_account (id, code, name, description, normal_balance, parent_title_account_id) VALUES
    (1, '100', 'Assets', 'Assets', 'debit', NULL),
    (2, '200', 'Liability', 'Liabilities', 'credit', NULL),
    (3, '300', 'Revenues', 'Revenues', 'credit', NULL),
    (4, '400', 'Expenses', 'Expenses', 'debit', NULL);

INSERT INTO public.account (parent_title_account_id, code, name, normal_balance, description) VALUES
    (1, '101', 'Cash', 'debit', 'Checking account balance (as shown in company records), currency, coins, checks received from customers but not yet deposited.'),
    (1, '120', 'Accounts Receivable', 'debit', 'Amounts owed to the company for services performed or products sold but not yet paid for.'),
    (1, '140', 'Merchandise Inventory', 'debit', 'Cost of merchandise purchased but has not yet been sold.'),
    (1, '150', 'Supplies', 'debit', 'Cost of supplies that have not yet been used. Supplies that have been used are recorded in Supplies Expense.'),
    (1, '160', 'Prepaid Insurance', 'debit', 'Cost of insurance that is paid in advance and includes a future accounting period.'),
    (1, '170', 'Land', 'debit', 'Cost to acquire and prepare land for use by the company.'),
    (1, '175', 'Buildings', 'debit', 'Cost to purchase or construct buildings for use by the company.'),
    (1, '178', 'Accumulated Depreciation - Buildings', 'credit', 'Amount of the buildings'' cost that has been allocated to Depreciation Expense since the time the building was acquired.'),
    (1, '180', 'Equipment', 'debit', 'Cost to acquire and prepare equipment for use by the company.'),
    (1, '188', 'Accumulated Depreciation - Equipment', 'credit', 'Amount of equipment''s cost that has been allocated to Depreciation Expense since the time the equipment was acquired.'),
    (2, '210', 'Notes Payable', 'credit', 'The amount of principal due on a formal written promise to pay. Loans from banks are included in this account.'),
    (2, '215', 'Accounts Payable', 'credit', 'Amount owed to suppliers who provided goods and services to the company but did not require immediate payment in cash.'),
    (2, '220', 'Wages Payable', 'credit', 'Amount owed to employees for hours worked but not yet paid.'),
    (2, '230', 'Interest Payable', 'credit', 'Amount owed for interest on Notes Payable up until the date of the balance sheet. This is computed by multiplying the amount of the note times the effective interest rate times the time period.'),
    (2, '240', 'Unearned Revenues', 'credit', 'Amounts received in advance of delivering goods or providing services. When the goods are delivered or services are provided, this liability amount decreases.'),
    (2, '250', 'Mortgage Loan Payable', 'credit', 'A formal loan that involves a lien on real estate until the loan is repaid.'),
    (2, '290', 'Owner''s name, Capital', 'credit', 'Amount the owner invested in the company (through cash or other assets) plus earnings of the company not withdrawn by the owner.'),
    (2, '295', 'Owner''s name, Drawing', 'debit', 'Amount that the owner of the sole proprietorship has withdrawn for personal use during the current accounting year. At the end of the year, the amount in this account will be transferred into Owner''s name, Capital (account 290).'),
    (3, '310', 'Service Revenues', 'credit', 'Amounts earned from providing services to clients, either for cash or on credit. When a service is provided on credit, both this account and Accounts Receivable will increase. When a service is provided for immediate cash, both this account and Cash will increase.'),
    (3, '350', 'Currency Trading', 'credit', 'This account handle currency exchanges. Given a source currency and a target currency, this account should be credited with the source currency, and debited with the target currency, at the exchange rate valid for the date the transaction takes place. This account will accumulate gains and losses made based on changes in the currency exchange rate. Those should periodically be transfered out of this account.'),
    (4, '500', 'Salaries Expense', 'debit', 'Expenses incurred for the work performed by salaried employees during the accounting period. These employees normally receive a fixed amount on a weekly, monthly, or annual basis.'),
    (4, '510', 'Wages Expense', 'debit', 'Expenses incurred for the work performed by non-salaried employees during the accounting period. These employees receive an hourly rate of pay.'),
    (4, '540', 'Supplies Expense', 'debit', 'Cost of supplies used up during the accounting period'),
    (4, '560', 'Rent Expense', 'debit', 'Cost of occupying rented facilities during the accounting period.'),
    (4, '570', 'Utilities Expense', 'debit', 'Costs for electricity, heat, water, and sewer that were used during the accounting period.'),
    (4, '576', 'Telephone Expense', 'debit', 'Cost of telephone used during the current accounting period.'),
    (4, '610', 'Advertising Expense', 'debit', 'Costs incurred by the company during the accounting period for ads, promotions, and other selling and expenses (other than salaries).'),
    (4, '750', 'Depreciation Expense', 'debit', 'Cost of long-term assets allocated to expense during the current accounting period.'),
    (4, '810', 'Interest Revenues', 'credit', 'Interest and dividends earned on bank accounts, investments or notes receivable. This account is increased when the interest is earned and either Cash or Interest Receivable is also increased.'),
    (4, '910', 'Gain on Sale of Assets', 'credit', 'Occurs when the company sells one of its assets (other than inventory) for more than the asset''s book value.'),
    (4, '960', 'Loss on Sale of Assets', 'debit', 'Occurs when the company sells one of its assets (other than inventory) for less than the asset''s book value.');


INSERT INTO public.currency (id, name, symbol) VALUES
    ('USD', 'United States Dollar', '$'),
    ('BOB', 'Boliviano', 'Bs.');

INSERT INTO public.exchange_rate (source_currency_id, target_currency_id, source_currency_rate, target_currency_rate, effective_period) VALUES
    ('USD', 'BOB', 100, 696, TSTZRANGE('2021-01-01', NULL, '[)')),
    ('BOB', 'USD', 696, 100, TSTZRANGE('2021-01-01', NULL, '[)'));


-- enable BOB for all accounts
INSERT INTO public.account_currency (account_id, currency_id)
SELECT public.account.id, 'BOB'
FROM public.account;

-- enable USD for cash and trading accounts
INSERT INTO public.account_currency (account_id, currency_id)
SELECT public.account.id, 'USD'
FROM public.account
WHERE public.account.code = '101'
OR public.account.code = '350';