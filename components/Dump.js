<DeckSwiper
          dataSource={Campaings}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  // SetCurrentSaveCampaign([...item])
                  // console.log(CurrentSelectCampaing)
                }}
              >
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    {/* <Left>
                        <Thumbnail source={{ uri: item.CampaignImages }} />
                        <Body>
                          <Text>{item.FundraiserTitle}</Text>
                       
                        </Body>
                      </Left> */}
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={{ uri: item.CampaignImages }}
                    />
                  </CardItem>
                  <View style={styles.ImageHeightSet}>
                    <Text style={styles.ImageDesc}>{item.FundraiserTitle}</Text>
                    <Text style={styles.ImageDesc2}>
                      {item.CampaignShortDescription}
                    </Text>
                  </View>
                  <CardItem>
                    <Icon
                      type="AntDesign"
                      name="like2"
                      style={{ color: "#ED4A6A" }}
                    />
                    <Text>{item.CampaignName}</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            );
          }}
        />