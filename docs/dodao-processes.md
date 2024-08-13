# Dodao Processes

## Roles
- Customer: When you create a task, you are in the Customer role.
- Performer: When you take a task, you are in the Performer role.
- Auditor: When you audit a task, you are in the Auditor role.

## Task Types
- Public
- Private
- Hackathon

## Wallet Connection

When you open the Dodao.dev dApp, it will show you publicly viewable Tasks. In order to create a new Task, take or audit an existing Task, you must connect your wallet.

Currently, two options are supported: MetaMask and WalletConnect.

1. MetaMask is supported on Desktop and Mobile. To connect with MetaMask on Desktop, please install the MetaMask browser plugin. To connect with MetaMask on Mobile, please install the MetaMask app for Android or iOS and open Dodao in the MetaMask in-app browser.

2. WalletConnect is supported on Desktop and Mobile. To connect with WalletConnect on Desktop, please install a WalletConnect compatible wallet on your mobile device and scan the QR code. Connection via WalletConnect on Mobile devices is available both from the Dodao native dApp and Dodao web dApp. To connect via WalletConnect on Mobile, please press connect, and the WalletConnect compatible wallet will be opened. If it is not installed, we suggest installing MetaMask, Trust Wallet, or AlphaWallet.

After connecting, you will see the "Wallet connected" message.

Below are the Dodao process descriptions, with a user (role) and a task [state].

## Task Creation (Customer) [New State]

To create a Task, press the create Task button, then the Task creation dialog will appear. You should put a Task Title that shortly describes the nature of the task and a full Description of it. You can check out the Task creation best practices for Task creation recommendations.
Currently, you can fund the Task with the native token of the selected chain and stablecoins. After you are done, press the create button, and then your wallet will prompt you to confirm the transaction. After the transaction is minted, the task will appear in the Customer tab for you and in Tasks for other Dodao users.

## Task Participation (Performer) [New State]

To take the task as a Performer, navigate to the Tasks page and pick the Task you like, read its Description, and if you are convinced you can make it, fill in the Task application text box and click Participate. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will move to the Applied tab on the Performer page, and the Customer will see that a Performer has applied for a task.

## Performer Selection (Customer) [Agreed State]

When someone has applied to work on the Task, the Customer will see it on the Selection tab of the Customer page.
The Customer can select one of the Performers who have applied for a Task. When a Performer is selected, they will see the Task in the Working tab of the Performer page. Other Performers will see lost Tasks in the Lost tab.

## Working on a Task (Performer) [Progress State]

When you are selected to work on the Task as a Performer, you will see it on the Working tab. You should then write your short plans for implementing the Task and press the Start the task button. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will change its color to indicate that the Task is in the Progress state.

## Submitting a Task for Review (Performer) [Review State]

After finishing your work on the Task, you should submit it for Review. You should then write your notes for the Customer, probably include a link to your work or pass it via the agreed-upon method with the Customer off-chain, and press the Review button. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will change its color to indicate that the Task is in the Review state.

## Reviewing a Task (Customer) [Review State]

When a Performer has sent their work for Review, you will see your task in the Review state on the Progress tab of the Customer page. You should then carefully review the received work from the Performer, and if you are convinced that the Task is implemented, press the Sign review button. Your wallet will ask for transaction confirmation. After the transaction is minted, the Task will move to the Completed tab of the Customer page, and the Performer will also see it on the Completed tab of the Performer page.

## Withdrawing Funds (Performer) [Complete State]

When a Customer has signed the Review, you can withdraw your earned funds to a preferred chain (the chain where the task was created or one which is supported by Axelar). Select the preferred chain and press the Withdraw button. Your wallet will ask for transaction confirmation. After the transaction is minted, you will receive funds in your wallet.

## Audit Process [Audit State]

When a task is in the Agreed, Progress, or Review stage, the Customer can apply for an Audit. When a task is in the Review stage, a Performer can apply for an Audit. A 10% audit fee is paid by topping up the task contract during the application.

When a task is sent to Audit, it is available for Auditors to apply for it. Then the Initiator of the audit can select the Auditor (note: maybe we will make it random). When an Auditor is selected, they carefully review the task and ask the Performer to send them their work. The Auditor must analyze if the work matches the task's requirements and, within 48 hours, make their decision to either set the task to a Completed stage or return it to the New stage for a new Performer selection. When the work does not match the task requirements, the Auditor, based on their professional expertise, has the right to ask the Performer to send their corrections if they believe it is minor and the work can be improved within the Audit period. The Auditor's role is to effectively and economically resolve the issue raised between the Customer and Performer, for which they get a 10% Audit fee.