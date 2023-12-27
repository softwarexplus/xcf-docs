# Alt Ctrl Bot - Ask Command

The `ask` command allows you to ask something to a server member using an embed message.

## Command Details

-   **Name:** `ask`
-   **Description:** Ask something to a server member
-   **DM Permission:** No (Cannot be used in direct messages)
-   **Default Member Permissions Required:** Moderate Members

## Options

1. `user`: User you want to send messages

    - Type: User
    - Required: Yes

2. `title`: Title of the embed

    - Type: String
    - Required: Yes

3. `description`: Description of the embed
    - Type: String
    - Required: Yes

## Examples

1. **Ask a Question:**
    - `/ask [@member]  [Important Question] [What is your opinion on the latest changes?]`
    - This sends an embed message with the title "Important Question" and the specified description to the mentioned user.

## Usage Notes

-   Use this command to send styled messages with titles and descriptions to server members.
-   Mention the user you want to send the message to using the `user` option.
-   Customize the title and description based on your message content.

For additional assistance or inquiries, please contact server moderators or administrators directly.
