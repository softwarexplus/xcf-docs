# Alt Ctrl Bot - Configuration Command

The `config` command allows you to configure various settings for Alt Ctrl Bot on your server.

## Command Details

-   **Name:** `config`
-   **Description:** Configure your bot
-   **DM Permission:** No (Cannot be used in direct messages)
-   **Default Member Permissions:** Administrator

## Subcommands

### 1. Moderator-Only Channel

#### Command: `moderator-only`

-   **Description:** Set or remove the moderator-only channel for Alt Ctrl Bot.
-   **Options:**
    -   `add`: Set a moderator-only channel
        -   Options:
            -   `channel`: Channel that you want to add as moderator-only (Type: Channel, Required: Yes)
    -   `remove`: Remove the moderator-only channel

## Examples

1. **Set Moderator-Only Channel:**

    - `/config moderator-only add [#moderation-channel]`
    - This sets `#moderation-channel` as the moderator-only channel.

2. **Remove Moderator-Only Channel:**
    - `/config moderator-only remove`
    - This removes the current moderator-only channel.

## Usage Notes

-   The `config` command requires the user to have the "Manage Server" permission.
-   Make sure to mention the specific channel you want to set as a moderator-only channel.

For additional assistance or inquiries, please contact server moderators or administrators directly.
