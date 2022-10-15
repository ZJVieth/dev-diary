# Script to scan and search documents for useful snippets and methods.

# Search by:
# - key (keywords)
# - title
# - descr (description)

# Usage:
# Run passively, one thread will continuously update it's internal database of snippets/topics.
# Input search terms into terminal, example:
# $ find key math
# => returns list of all math snippets/topics, and links to file names that can be opened in VS Code directly
# $ find title clamp
# => returns all snippets with clamp in title
# $ find desc css animated border
# => returns all snippets with the words "css", "animated", and "border" in the description

# tag formatting:
# title: "# example title" "## example title 2" "### example title 3"
# keys: "<[example-key"
# desc: "<°description°>"

print("init")