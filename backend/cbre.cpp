#include <iostream> 
#include <sstream>
#include <fstream>
#include <vector>
using namespace std;

// int FLOORS = 5;
// Floor    Max-Capacity        1   2   3   4   5   6   7   8   9   10  11
//  A        43                 22  45  34  51  11  37  42  16  29  56  49
//  B        81
//  C        73
//  D        54
//  E        97

struct Team{
    int team;
    int strength;
    vector<int> pref;
    vector<int> tol;
    vector<int> noway;
};

struct Group{
    vector<int> team_nums;
    int size;
};

// Team Strength    Preferred      Tolerated    No-way
// 1    22          2, 4, 6, 11    3, 8, 10     5, 7, 9

vector<Team*> populateFromFile(string filename){
    vector<Team*> teams;
    string line;
    fstream fin(filename);

    string tn;
    string s;
    vector<int> p;
    vector<int> t;
    vector<int> nw;

    while(fin.good()){
        p.clear();
        t.clear();
        nw.clear();
        getline(fin, tn);
        getline(fin, s);

        getline(fin, line);
        stringstream ss(line);
        for (int i; ss >> i;) {
            p.push_back(i);    
            if (ss.peek() == ',' || ss.peek() == ' ')
                ss.ignore();
        }
        
        getline(fin, line);
        stringstream ss2(line);
        for (int i; ss2 >> i;) {
            t.push_back(i);    
            if (ss2.peek() == ',' || ss2.peek() == ' ')
                ss2.ignore();
        }

        getline(fin, line);
        stringstream ss3(line);
        for (int i; ss3 >> i;) {
            nw.push_back(i);    
            if (ss3.peek() == ',' || ss3.peek() == ' ')
                ss3.ignore();
        }
        
        Team* newTeam = new Team;
        newTeam->team = stoi(tn);
        newTeam->strength = stoi(s);
        newTeam->pref = p;
        newTeam->tol = t;
        newTeam->noway = nw;
        teams.push_back(newTeam);
    }

    return teams;
}

vector<Team*> populateFromExample(){
    vector<Team*> teams;

    Team* newTeam = new Team;
    newTeam->team = 1;
    newTeam->strength = 22;
    newTeam->pref = {2,3,6,11};
    newTeam->tol = {3,8,10};
    newTeam->noway = {5,7,9};

    teams.push_back(newTeam);

    return teams;
}

void printAllNums(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){
        cout << "Team #:   " << teams[i]->team << endl;
        cout << "Strength: " << teams[i]->strength << endl;
        cout << "Pref:     ";
        for(int x : teams[i]->pref) cout << x << " ";
        cout << endl;
        cout << "Tol:      ";
        for(int x : teams[i]->tol) cout << x << " ";
        cout << endl;
        cout << "NoWay:    ";
        for(int x : teams[i]->noway) cout << x << " ";
        cout << endl;
        cout << endl;
    }
}

void printAllNums2(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){
        cout << "Team #:   " << teams[i]->team << endl;
        cout << "Strength: " << teams[i]->strength << endl;
        cout << "Pref:     ";
        for(int x : teams[i]->pref) cout << x << " ";
        cout << endl;
        cout << "Tol:      ";
        for(int x : teams[i]->tol) cout << x << " ";
        cout << endl;
        cout << endl;
    }
}

void printAllGroups(vector< Group* > groups, vector<Team*> teams){
    for(int i = 0; i < groups.size(); i++){
        cout << "Size: " << groups[i]->size << "    Groups: ";
        for(int j = 0; j < groups[i]->team_nums.size(); j++){
            cout << groups[i]->team_nums[j] << " ";
        }
        cout << endl;
    }
}

void eliminateNoWay(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){

        for(int j = 0; j < teams[i]->noway.size(); j++){

            int team_to_elem = teams[i]->noway[j];

            for(int k = 0; k < teams[team_to_elem - 1]->pref.size(); k++){

                if(teams[team_to_elem - 1]->pref[k] == i + 1){
                    // cout << "hit" << endl;
                    teams[team_to_elem - 1]->pref.erase(teams[team_to_elem - 1]->pref.begin() + k);
                }

            }

            for(int k = 0; k < teams[team_to_elem - 1]->tol.size(); k++){

                if(teams[team_to_elem - 1]->tol[k] == i + 1){
                    // cout << "hit" << endl;
                    teams[team_to_elem - 1]->tol.erase(teams[team_to_elem - 1]->tol.begin() + k);
                }

            }

        }

    }
}

vector<Group*> createGroups(vector<Team*> teams){
    vector<Group*> groups;
    int N = teams.size();
    for(int i = 0; i < N - 1; i++){
        vector<int> tms;
        int gsize = 0;
        tms.push_back(teams[i]->team);
        gsize += teams[i]->strength;

        for(int j = 0; j < teams[i]->pref.size(); j++){

            int currPref = teams[i]->pref[j];
            for(int k = 0; k < teams[currPref - 1]->pref.size(); k++){

                if(teams[currPref - 1]->pref[k] == i + 1){
                    tms.push_back(teams[currPref - 1]->team);
                    gsize += teams[currPref - 1]->strength;
                }

            }

        }
        Group* newGroup = new Group;
        newGroup->team_nums = tms; 
        newGroup->size = gsize;
        groups.push_back(newGroup);
    }
    return groups;
}

vector<Group*> createGroupsWithTol(vector<Team*> teams){
    vector<Group*> groups;
    int N = teams.size();
    for(int i = 0; i < N - 1; i++){
        vector<int> tms;
        int gsize = 0;
        tms.push_back(teams[i]->team);
        gsize += teams[i]->strength;

        for(int j = 0; j < teams[i]->pref.size(); j++){

            int currPref = teams[i]->pref[j];
            for(int k = 0; k < teams[currPref - 1]->pref.size(); k++){
                if(teams[currPref - 1]->pref[k] == i + 1){
                    tms.push_back(teams[currPref - 1]->team);
                    gsize += teams[currPref - 1]->strength;
                }
            }
            for(int k = 0; k < teams[currPref - 1]->tol.size(); k++){
                if(teams[currPref - 1]->tol[k] == i + 1){
                    tms.push_back(teams[currPref - 1]->team);
                    gsize += teams[currPref - 1]->strength;
                }
            }

        }


        Group* newGroup = new Group;
        newGroup->team_nums = tms; 
        newGroup->size = gsize;
        groups.push_back(newGroup);
    }
    return groups;
}

int main(){
    vector<Team*> teams = populateFromFile("example2.csv");
    printAllNums(teams);
    eliminateNoWay(teams);
    cout << endl << endl << "   [AFTER]" << endl << endl;
    printAllNums2(teams);

    // vector<Group*> groups = createGroups(teams);
    vector<Group*> groups2 = createGroupsWithTol(teams);
    // printAllGroups(groups, teams);
    printAllGroups(groups2, teams);

    return 0;
}

