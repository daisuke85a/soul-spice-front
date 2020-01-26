<template>
  <div>
    <!-- TODO: 画面いっぱいに広がるように拡張したい -->
    <!-- レスポンシブレイアウトに応じてheightを調節したい -->
    <v-parallax dark src="/images/bg.jpg" height="400">
      <div class="text-center">
        <fade-in-up-in-screen>
          <h2 class="display-1 font-weight-black pt-10">
            TIME TABLE
          </h2>
          <p class="subtitle-1">- スケジュール -</p>
        </fade-in-up-in-screen>
      </div>
      <div class="text-left">
        <fade-in-up-in-screen>
          <v-simple-table class="font-weight-bold">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">水曜</th>
                  <th class="text-left">土曜</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18:00～18:50</td>
                  <td>
                    LOCK・FREESTYLE<br />
                    スタートクラス<br />
                    TAKUYA<br />
                  </td>
                  <td>
                    HOUSE・HIPHOP<br />
                    スタートクラス<br />
                    YUKKY<br />
                  </td>
                </tr>
                <tr>
                  <td>19:00～21:00</td>
                  <td>
                    LOCK・FREESTYLE<br />
                    初中級<br />
                    TAKUYA<br />
                  </td>
                  <td>
                    HOUSE・HIPHOP<br />
                    初中級<br />
                    YUKKY<br />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </fade-in-up-in-screen>
      </div>
    </v-parallax>
  </div>
</template>
<style scoped>
.theme--light.v-data-table {
  background-color: rgba(0, 0, 0, 0);
  color: white;
}
.theme--light.v-data-table thead tr th {
  color: white;
}
.theme--light.v-data-table thead tr:last-child th {
  border-bottom: 1px solid white;
}
.theme--light.v-data-table
  tbody
  tr:not(:last-child)
  td:not(.v-data-table__mobile-row) {
  border-bottom: 1px solid white;
}
.display-1 {
  letter-spacing: 0.2em !important;
}
</style>
