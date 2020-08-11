API="https://murmuring-cliffs-14664.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --header "Authorization: Bearer token=${TOKEN}"\
  --request DELETE \

echo
